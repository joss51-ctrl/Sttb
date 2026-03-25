using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Media;
using STTB_BE.Contracts.ResponseModels.Media;
using STTB_BE.Entities;


public class GetMediaListRequestHandler :
    IRequestHandler<GetMediaListRequest, GetMediaListResponse>
{
    private readonly ApplicationDbContext _db;

    public GetMediaListRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<GetMediaListResponse> Handle(
        GetMediaListRequest request,
        CancellationToken cancellationToken)
    {
        var medias = await _db.Medias
            .AsNoTracking()
            .ToListAsync(cancellationToken);

        return new GetMediaListResponse
        {
            Items = medias.Select(x => new GetMediaResponse
            {
                Id = x.Id,
                FormatMedia = x.FormatMedia,
                TopikKategori = x.TopikKategori,
                Title = x.Title,
                ThumbnailUrl = x.ThumbnailUrl,
                ContentUrl = x.ContentUrl,
                CreatedAt = x.CreatedAt,
                Status = x.Status
            }).ToList()
        };
    }
}