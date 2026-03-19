// Commons/RequestHandlers/Auth/RegisterRequestHandler.cs
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using STTB_BE.Contracts.RequestModels.Auth;
using STTB_BE.Contracts.ResponseModels.Auth;
using STTB_BE.Entities;

namespace STTB_BE.Commons.RequestHandlers.Auth;

public class RegisterRequestHandler : IRequestHandler<RegisterRequest, LoginResponse>
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly ILogger<RegisterRequestHandler> _logger;

    public RegisterRequestHandler(
        UserManager<User> userManager,
        RoleManager<Role> roleManager,
        ILogger<RegisterRequestHandler> logger)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _logger = logger;
    }

    public async Task<LoginResponse> Handle(RegisterRequest request, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Registering new user with email: {Email}, role: {Role}",
            request.Email, request.Role);

        // Check if user already exists
        var existingUser = await _userManager.FindByEmailAsync(request.Email);
        if (existingUser != null)
        {
            _logger.LogWarning("User with email {Email} already exists", request.Email);
            throw new InvalidOperationException("User with this email already exists");
        }

        // Validate role exists
        if (!await _roleManager.RoleExistsAsync(request.Role))
        {
            _logger.LogWarning("Role {Role} does not exist", request.Role);
            throw new InvalidOperationException($"Role {request.Role} does not exist");
        }

        // Create new user
        var user = new User
        {
            UserName = request.Email,
            Email = request.Email,
            FullName = request.FullName,
            Role = request.Role,
            CreatedAt = DateTime.UtcNow,
            IsActive = true
        };

        var result = await _userManager.CreateAsync(user, request.Password);

        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            _logger.LogError("Failed to create user: {Errors}", errors);
            throw new InvalidOperationException($"Failed to create user: {errors}");
        }

        // Add to role
        await _userManager.AddToRoleAsync(user, request.Role);

        _logger.LogInformation("Successfully registered user {Email} with ID: {UserId}",
            request.Email, user.Id);

        // Return login response (you might want to generate token here)
        return new LoginResponse
        {
            User = new UserInfo
            {
                Id = user.Id,
                Email = user.Email,
                FullName = user.FullName,
                Role = user.Role
            }
        };
    }
}