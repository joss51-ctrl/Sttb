using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Media;
using STTB_BE.Entities;


public class UpdateMediaRequestHandler :
    IRequestHandler<UpdateMediaRequest, bool>
{
    private readonly ApplicationDbContext _db;

    public UpdateMediaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<bool> Handle(
        UpdateMediaRequest request,
        CancellationToken cancellationToken)
    {
        var media = await _db.Medias
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (media == null)
            return false;

        media.FormatMedia = request.FormatMedia;
        media.TopikKategori = request.TopikKategori;
        media.Title = request.Title;
        media.ThumbnailUrl = request.ThumbnailUrl;
        media.ContentUrl = request.ContentUrl;

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}