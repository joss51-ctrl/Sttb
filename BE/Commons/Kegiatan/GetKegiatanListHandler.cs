using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Contracts.RequestModels.Kegiatan;
using STTB_BE.Contracts.ResponseModels.Kegiatan;
using STTB_BE.Entities;


public class GetKegiatanListRequestHandler
    : IRequestHandler<GetKegiatanListRequest, GetKegiatanListResponse>
{
    private readonly ApplicationDbContext _db;

    public GetKegiatanListRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<GetKegiatanListResponse> Handle(
        GetKegiatanListRequest request,
        CancellationToken cancellationToken)
    {
        var items = await _db.Kegiatans
            .AsNoTracking()
            .ToListAsync(cancellationToken);

        return new GetKegiatanListResponse
        {
            Items = items.Select(x => new GetKegiatanResponse
            {
                Id = x.Id,
                Title = x.Title,
                StartDateTime = x.StartDateTime,
                EndDateTime = x.EndDateTime,
                Organizer = x.Organizer,
                Category = x.Category,
                IsFeatured = x.IsFeatured,
                Status = x.Status
            }).ToList()
        };
    }
}