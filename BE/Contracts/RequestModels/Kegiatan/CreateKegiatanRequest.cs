using MediatR;

namespace STTB_BE.Contracts.RequestModels.Kegiatan;

public class CreateKegiatanRequest : IRequest<Guid>
{
    public string Title { get; set; } = string.Empty;

    public DateTime StartDateTime { get; set; }

    public DateTime EndDateTime { get; set; }

    public string Organizer { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public bool IsFeatured { get; set; }

    public string Status { get; set; } = string.Empty;
    public string Description { get; set; }
    public string Location { get; set; }
}