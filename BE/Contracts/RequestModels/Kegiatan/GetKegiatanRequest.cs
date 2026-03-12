using MediatR;
using STTB_BE.Contracts.ResponseModels.Kegiatan;

namespace STTB_BE.Contracts.RequestModels.Kegiatan;

public class GetKegiatanRequest : IRequest<GetKegiatanResponse>
{
    public Guid Id { get; set; }
}