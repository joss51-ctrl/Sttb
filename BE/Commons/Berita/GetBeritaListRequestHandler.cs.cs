using MediatR;
using STTB_BE.Entities;
using STTB_BE.Contracts.ResponseModels.Berita;
using STTB_BE.Contracts.RequestModels.Berita.DTO;
using STTB_BE.Contracts.RequestModels.Berita;
using Microsoft.EntityFrameworkCore;

public class GetBeritaListRequestHandler :
    IRequestHandler<GetBeritaListRequest, BeritaListResponse>
{
    private readonly ApplicationDbContext _db;

    public GetBeritaListRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<BeritaListResponse> Handle(
        GetBeritaListRequest request,
        CancellationToken cancellationToken)
    {
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