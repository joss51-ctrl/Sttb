using MediatR;
using Microsoft.AspNetCore.Mvc;
using STTB_BE.Contracts.RequestModels.Media;
using STTB_BE.Contracts.ResponseModels.Media;


namespace YourProject.WebAPI.Controllers;

[ApiController]
[Route("api/media/v1/[controller]")]
public class MediaController : ControllerBase
{
    private readonly IMediator _mediator;

    public MediaController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("get/list")]
    public async Task<ActionResult<GetMediaListResponse>> List(
        [FromQuery] GetMediaListRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpGet("get/{id}")]
    public async Task<ActionResult<GetMediaResponse>> Get(
        Guid id,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(
            new GetMediaRequest { Id = id }, cancellationToken);

        return Ok(result);
    }

    [HttpPost("post")]
    public async Task<ActionResult<Guid>> Create(
        [FromBody] CreateMediaRequest request,
        CancellationToken cancellationToken)
    {
        var id = await _mediator.Send(request, cancellationToken);
        return Ok(id);
    }

    [HttpPut("put")]
    public async Task<ActionResult<bool>> Update(
        [FromBody] UpdateMediaRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpDelete("delete/{id}")]
    public async Task<ActionResult<bool>> Delete(
        Guid id,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(
            new DeleteMediaRequest { Id = id }, cancellationToken);

        return Ok(result);
    }
}