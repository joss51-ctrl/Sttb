using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Media;
using STTB_BE.Contracts.ResponseModels.Media;
using STTB_BE.Entities;


public class GetMediaRequestHandler :
    IRequestHandler<GetMediaRequest, GetMediaResponse?>
{
    private readonly ApplicationDbContext _db;

    public GetMediaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<GetMediaResponse?> Handle(
        GetMediaRequest request,
        CancellationToken cancellationToken)
    {
        var media = await _db.Medias
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (media == null)
            return null;

        return new GetMediaResponse
        {
            Id = media.Id,
            FormatMedia = media.FormatMedia,
            TopikKategori = media.TopikKategori,
            Title = media.Title,
            ThumbnailUrl = media.ThumbnailUrl,
            ContentUrl = media.ContentUrl,
            CreatedAt = media.CreatedAt,
            Status = media.Status,
        };
    }
}