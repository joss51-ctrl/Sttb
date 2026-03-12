using MediatR;

namespace STTB_BE.Contracts.RequestModels.Berita;

public class DeleteBeritaRequest : IRequest<bool>
{
    public Guid Id { get; set; }
}