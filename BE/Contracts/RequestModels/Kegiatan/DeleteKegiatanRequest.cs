using MediatR;

namespace STTB_BE.Contracts.RequestModels.Kegiatan;

public class DeleteKegiatanRequest : IRequest<bool>
{
    public Guid Id { get; set; }
}