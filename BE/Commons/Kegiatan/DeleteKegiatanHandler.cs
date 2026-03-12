using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Kegiatan;
using STTB_BE.Entities;


public class DeleteKegiatanRequestHandler
    : IRequestHandler<DeleteKegiatanRequest, bool>
{
    private readonly ApplicationDbContext _db;

    public DeleteKegiatanRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<bool> Handle(
        DeleteKegiatanRequest request,
        CancellationToken cancellationToken)
    {
        var kegiatan = await _db.Kegiatans
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (kegiatan == null)
            return false;

        _db.Kegiatans.Remove(kegiatan);

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}