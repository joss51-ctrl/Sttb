using System.Security.Cryptography;
using MediatR;
using STTB_BE.Contracts.RequestModels.Media;
using STTB_BE.Entities;

namespace STTB_BE.Commons.RequestHandlers;

public class CreateMediaRequestHandler :
    IRequestHandler<CreateMediaRequest, Guid>
{
    private readonly ApplicationDbContext _db;

    public CreateMediaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<Guid> Handle(
        CreateMediaRequest request,
        CancellationToken cancellationToken)
    {
        var media = new Media
        {
            Id = Guid.NewGuid(),
            FormatMedia = request.FormatMedia,
            TopikKategori = request.TopikKategori,
            Title = request.Title,
            ThumbnailUrl = request.ThumbnailUrl,
            ContentUrl = request.ContentUrl,
            CreatedAt = DateTime.UtcNow
        };

        _db.Medias.Add(media);

        await _db.SaveChangesAsync(cancellationToken);

        return media.Id;
    }
}