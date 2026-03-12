using MediatR;
using STTB_BE.Contracts.ResponseModels.Media;

namespace STTB_BE.Contracts.RequestModels.Media;

public class GetMediaListRequest : IRequest<GetMediaListResponse>
{
}