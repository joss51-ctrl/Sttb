using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Auth;
using STTB_BE.Contracts.ResponseModels.Auth;
using STTB_BE.Entities;

namespace STTB_BE.WebAPI.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly ILogger<AuthController> _logger;

    public AuthController(
        IMediator mediator,
        UserManager<User> userManager,
        RoleManager<Role> roleManager,
        ILogger<AuthController> logger)
    {
        _mediator = mediator;
        _userManager = userManager;
        _roleManager = roleManager;
        _logger = logger;
    }

    [HttpPost("login")]
    public async Task<ActionResult<LoginResponse>> Login(
        [FromBody] LoginRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await _mediator.Send(request, cancellationToken);
            return Ok(result);
        }
        catch (UnauthorizedAccessException ex)
        {
            return Unauthorized(new { message = ex.Message });
        }
    }

    [HttpPost("register")]
    [Authorize(Policy = "SuperAdminOnly")]
    public async Task<ActionResult<LoginResponse>> Register(
        [FromBody] RegisterRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await _mediator.Send(request, cancellationToken);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("db-test")]
    [AllowAnonymous]
    public async Task<IActionResult> TestDatabase()
    {
        try
        {
            // Use the injected UserManager and RoleManager
            var userCount = await _userManager.Users.CountAsync();
            var roleCount = await _roleManager.Roles.CountAsync();
            var firstUser = await _userManager.Users.FirstOrDefaultAsync();

            return Ok(new
            {
                CanConnect = true,
                UserCount = userCount,
                RoleCount = roleCount,
                FirstUserEmail = firstUser?.Email,
                FirstUserRole = firstUser?.Role,
                TablesExist = new
                {
                    Users = await _userManager.Users.AnyAsync(),
                    Roles = await _roleManager.Roles.AnyAsync()
                }
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                CanConnect = false,
                Error = ex.Message,
                InnerError = ex.InnerException?.Message
            });
        }
    }

    [HttpPost("seed-users")]
    [AllowAnonymous]
    public async Task<IActionResult> SeedUsers()
    {
        var results = new List<string>();

        try
        {
            // Create roles first
            string[] roleNames = { "Super Admin", "Content Admin", "Editor", "Approver" };
            foreach (var roleName in roleNames)
            {
                if (!await _roleManager.RoleExistsAsync(roleName))
                {
                    await _roleManager.CreateAsync(new Role { Name = roleName });
                    results.Add($"Created role: {roleName}");
                }
            }

            // Create users
            var users = new[]
            {
                new { Email = "admin@sttb.ac.id", Password = "Admin@123", Name = "System Admin", Role = "Super Admin" },
                new { Email = "content@sttb.ac.id", Password = "Content@123", Name = "Content Manager", Role = "Content Admin" },
                new { Email = "editor@sttb.ac.id", Password = "Editor@123", Name = "News Editor", Role = "Editor" },
                new { Email = "approver@sttb.ac.id", Password = "Approver@123", Name = "Content Approver", Role = "Approver" }
            };

            foreach (var u in users)
            {
                if (await _userManager.FindByEmailAsync(u.Email) == null)
                {
                    var user = new User
                    {
                        UserName = u.Email,
                        Email = u.Email,
                        FullName = u.Name,
                        Role = u.Role,
                        CreatedAt = DateTime.UtcNow,
                        IsActive = true
                    };

                    var result = await _userManager.CreateAsync(user, u.Password);
                    if (result.Succeeded)
                    {
                        await _userManager.AddToRoleAsync(user, u.Role);
                        results.Add($"Created user: {u.Email} with role {u.Role}");
                    }
                    else
                    {
                        results.Add($"Failed to create {u.Email}: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                    }
                }
                else
                {
                    results.Add($"User already exists: {u.Email}");
                }
            }

            return Ok(new
            {
                Message = "Seed completed",
                Results = results,
                FinalUserCount = await _userManager.Users.CountAsync(),
                FinalRoleCount = await _roleManager.Roles.CountAsync()
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                Error = ex.Message,
                Results = results
            });
        }
    }

    [HttpGet("users")]
    [Authorize(Policy = "SuperAdminOnly")]
    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userManager.Users
            .Select(u => new
            {
                u.Id,
                u.Email,
                u.FullName,
                u.Role,
                u.CreatedAt,
                u.LastLoginAt,
                u.IsActive
            })
            .ToListAsync();

        return Ok(new
        {
            TotalUsers = users.Count,
            Users = users
        });
    }

    [HttpGet("ping")]
    [AllowAnonymous]
    public IActionResult Ping()
    {
        return Ok(new
        {
            Message = "Auth controller is working!",
            Timestamp = DateTime.Now,
            Endpoints = new[]
            {
                "POST /login",
                "POST /register",
                "GET /db-test",
                "POST /seed-users",
                "GET /users",
                "GET /ping"
            }
        });
    }
}