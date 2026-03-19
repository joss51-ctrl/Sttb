using MediatR;
using STTB_BE.Entities;
using STTB_BE.Contracts.ResponseModels.Berita;
using STTB_BE.Contracts.RequestModels.Berita.DTO;
using STTB_BE.Contracts.RequestModels.Berita;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

public class GetBeritaListRequestHandler :
    IRequestHandler<GetBeritaListRequest, BeritaListResponse>
{
    private readonly ApplicationDbContext _db;
    private readonly ILogger<GetBeritaListRequestHandler> _logger;

    public GetBeritaListRequestHandler(ApplicationDbContext db, ILogger<GetBeritaListRequestHandler> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<BeritaListResponse> Handle(
        GetBeritaListRequest request,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Listing News");
        var presses = await _db.Beritas.ToListAsync(cancellationToken);

        return new BeritaListResponse
        {
            Items = presses.Select(p => new BeritaResponse
            {
                Id = p.Id,
                Title = p.Title,
                Content = p.Content,
                ThumbnailUrl = p.ThumbnailUrl,
                Category = p.Category,
                Taglines = p.Taglines,
                CreatedAt = p.CreatedAt
            }).ToList()
        };
    }
}