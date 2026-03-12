using MediatR;
using STTB_BE.Contracts.ResponseModels.Berita;

namespace STTB_BE.Contracts.RequestModels.Berita.DTO;

public class GetBeritaRequest : IRequest<BeritaResponse>
{
    public Guid Id { get; set; }
}