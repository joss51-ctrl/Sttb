using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Kegiatan;
using STTB_BE.Contracts.ResponseModels.Kegiatan;
using STTB_BE.Entities;


public class GetKegiatanRequestHandler
    : IRequestHandler<GetKegiatanRequest, GetKegiatanResponse?>
{
    private readonly ApplicationDbContext _db;

    public GetKegiatanRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<GetKegiatanResponse?> Handle(
        GetKegiatanRequest request,
        CancellationToken cancellationToken)
    {
        var kegiatan = await _db.Kegiatans
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (kegiatan == null)
            return null;

        return new GetKegiatanResponse
        {
            Id = kegiatan.Id,
            Title = kegiatan.Title,
            StartDateTime = kegiatan.StartDateTime,
            EndDateTime = kegiatan.EndDateTime,
            Organizer = kegiatan.Organizer,
            Category = kegiatan.Category,
            IsFeatured = kegiatan.IsFeatured,
            Status = kegiatan.Status,
            Description = kegiatan.Description,
            Location = kegiatan.Location
        };
    }
}