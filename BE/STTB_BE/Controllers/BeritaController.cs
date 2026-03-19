using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Contracts.RequestModels.Berita.DTO;
using STTB_BE.Contracts.ResponseModels.Berita;

namespace STTB_BE.WebAPI.Controllers;

[ApiController]
[Route("api/v1/berita")]  // Fixed route - removed [controller] duplication
public class BeritaController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly ILogger<BeritaController> _logger;  // Add this

    public BeritaController(IMediator mediator, ILogger<BeritaController> logger)  // Add logger param
    {
        _mediator = mediator;
        _logger = logger;  // Store it
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<BeritaListResponse>> List(
        [FromQuery] GetBeritaListRequest request,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Getting berita list with parameters: {@Request}", request);

        try
        {
            var result = await _mediator.Send(request, cancellationToken);
            _logger.LogInformation("Retrieved {Count} berita items", result.Items?.Count ?? 0);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting berita list");
            throw;
        }
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<ActionResult<BeritaResponse>> Get(
        Guid id,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Getting berita with ID: {BeritaId}", id);

        try
        {
            var result = await _mediator.Send(
                new GetBeritaRequest { Id = id },
                cancellationToken);

            if (result == null)
            {
                _logger.LogWarning("Berita with ID {BeritaId} not found", id);
                return NotFound();
            }

            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting berita with ID {BeritaId}", id);
            throw;
        }
    }

    [HttpPost]
    [Authorize(Policy = "Editors")]
    public async Task<ActionResult<Guid>> Create(
        [FromBody] CreateBeritaRequest request,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Creating new berita with title: {Title}", request.Title);

        try
        {
            var id = await _mediator.Send(request, cancellationToken);
            _logger.LogInformation("Created berita with ID: {BeritaId}", id);

            return CreatedAtAction(nameof(Get), new { id }, id);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating berita with title {Title}", request.Title);
            throw;
        }
    }

    [HttpPut("{id}")]
    [Authorize(Policy = "Approvers")]
    public async Task<ActionResult<bool>> Update(
        Guid id,
        [FromBody] UpdateBeritaRequest request,
        CancellationToken cancellationToken)
    {
        if (id != request.Id)
        {
            _logger.LogWarning("ID mismatch: URL ID {UrlId} vs Body ID {BodyId}", id, request.Id);
            return BadRequest("ID mismatch");
        }

        _logger.LogInformation("Updating berita with ID: {BeritaId}", id);

        try
        {
            var result = await _mediator.Send(request, cancellationToken);

            if (!result)
            {
                _logger.LogWarning("Berita with ID {BeritaId} not found for update", id);
                return NotFound();
            }

            _logger.LogInformation("Updated berita with ID: {BeritaId}", id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating berita with ID {BeritaId}", id);
            throw;
        }
    }

    [HttpDelete("{id}")]
    [Authorize(Policy = "ContentAdmins")]
    public async Task<ActionResult<bool>> Delete(
        Guid id,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Deleting berita with ID: {BeritaId}", id);

        try
        {
            var result = await _mediator.Send(
                new DeleteBeritaRequest { Id = id },
                cancellationToken);

            if (!result)
            {
                _logger.LogWarning("Berita with ID {BeritaId} not found for deletion", id);
                return NotFound();
            }

            _logger.LogInformation("Deleted berita with ID: {BeritaId}", id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting berita with ID {BeritaId}", id);
            throw;
        }
    }
}