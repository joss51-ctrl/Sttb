using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STTB_BE.Contracts.RequestModels.Kegiatan;
using STTB_BE.Contracts.ResponseModels.Kegiatan;

namespace YourProject.WebAPI.Controllers;

[ApiController]
[Route("api/kegiatan/v1[controller]")]
public class KegiatanController : ControllerBase
{
    private readonly IMediator _mediator;

    public KegiatanController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("list")]
    [AllowAnonymous]
    public async Task<ActionResult<GetKegiatanListResponse>> List(
        [FromQuery] GetKegiatanListRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpGet("get/{id}")]
    [AllowAnonymous]
    public async Task<ActionResult<GetKegiatanResponse>> Get(
        Guid id,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(
            new GetKegiatanRequest { Id = id }, cancellationToken);

        return Ok(result);
    }

    [HttpPost("post")]
    public async Task<ActionResult<Guid>> Create(
        [FromBody] CreateKegiatanRequest request,
        CancellationToken cancellationToken)
    {
        var id = await _mediator.Send(request, cancellationToken);
        return Ok(id);
    }

    [HttpPut("put")]
    public async Task<ActionResult<bool>> Update(
        [FromBody] UpdateKegiatanRequest request,
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
            new DeleteKegiatanRequest { Id = id }, cancellationToken);

        return Ok(result);
    }
}