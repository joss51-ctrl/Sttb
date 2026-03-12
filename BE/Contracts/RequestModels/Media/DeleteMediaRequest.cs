using MediatR;

namespace STTB_BE.Contracts.RequestModels.Media;

public class DeleteMediaRequest : IRequest<bool>
{
    public Guid Id { get; set; }
}