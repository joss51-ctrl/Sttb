using MediatR;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Contracts.ResponseModels.Berita;

namespace STTB_BE.Contracts.RequestModels.Berita;

public class GetBeritaListRequest : IRequest<BeritaListResponse>
{
}