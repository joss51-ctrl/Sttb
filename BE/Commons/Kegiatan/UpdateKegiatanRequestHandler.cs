using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Kegiatan;
using STTB_BE.Entities;


public class UpdateKegiatanRequestHandler
    : IRequestHandler<UpdateKegiatanRequest, bool>
{
    private readonly ApplicationDbContext _db;

    public UpdateKegiatanRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<bool> Handle(
        UpdateKegiatanRequest request,
        CancellationToken cancellationToken)
    {
        var kegiatan = await _db.Kegiatans
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (kegiatan == null)
            return false;

        kegiatan.Title = request.Title;
        kegiatan.StartDateTime = request.StartDateTime;
        kegiatan.EndDateTime = request.EndDateTime;
        kegiatan.Organizer = request.Organizer;
        kegiatan.Category = request.Category;
        kegiatan.IsFeatured = request.IsFeatured;
        kegiatan.Status = request.Status;
        kegiatan.Description = request.Description;
        kegiatan.Location = request.Location;

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}