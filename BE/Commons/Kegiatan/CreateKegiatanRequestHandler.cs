using MediatR;
using STTB_BE.Contracts.RequestModels.Kegiatan;
using STTB_BE.Entities;


namespace STTB_BE.Commons.RequestHandlers.Kegiatan;

public class CreateKegiatanRequestHandler
    : IRequestHandler<CreateKegiatanRequest, Guid>
{
    private readonly ApplicationDbContext _db;

    public CreateKegiatanRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<Guid> Handle(
        CreateKegiatanRequest request,
        CancellationToken cancellationToken)
    {
        var kegiatan = new STTB_BE.Entities.Kegiatan
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            StartDateTime = request.StartDateTime,
            EndDateTime = request.EndDateTime,
            Organizer = request.Organizer,
            Category = request.Category,
            IsFeatured = request.IsFeatured,
            Status = request.Status,
            Location = request.Location,
            Description = request.Description
        };

        _db.Kegiatans.Add(kegiatan);

        await _db.SaveChangesAsync(cancellationToken);

        return kegiatan.Id;
    }
}