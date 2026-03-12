using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Media;
using STTB_BE.Entities;


public class DeleteMediaRequestHandler :
    IRequestHandler<DeleteMediaRequest, bool>
{
    private readonly ApplicationDbContext _db;

    public DeleteMediaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<bool> Handle(
        DeleteMediaRequest request,
        CancellationToken cancellationToken)
    {
        var media = await _db.Medias
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (media == null)
            return false;

        _db.Medias.Remove(media);

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}