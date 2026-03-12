using MediatR;
using Microsoft.AspNetCore.Mvc;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Contracts.RequestModels.Berita.DTO;
using STTB_BE.Contracts.ResponseModels.Berita;

namespace STTB_BE.WebAPI.Controllers;

[ApiController]
[Route("api/berita/v1/[controller]")]
public class BeritaController : ControllerBase
{
    private readonly IMediator _mediator;

    public BeritaController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("get/list")]
    public async Task<ActionResult<BeritaListResponse>> List(
        [FromQuery] GetBeritaListRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpGet("get/{id}")]
    public async Task<ActionResult<BeritaResponse>> Get(
        Guid id,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(
            new GetBeritaRequest { Id = id },
            cancellationToken);

        return Ok(result);
    }

    [HttpPost("post")]
    public async Task<ActionResult<Guid>> Create(
        [FromBody] CreateBeritaRequest request,
        CancellationToken cancellationToken)
    {
        var id = await _mediator.Send(request, cancellationToken);

        return Ok(id);
    }

    [HttpPut("put")]
    public async Task<ActionResult<bool>> Update(
        [FromBody] UpdateBeritaRequest request,
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
            new DeleteBeritaRequest { Id = id },
            cancellationToken);

        return Ok(result);
    }
}