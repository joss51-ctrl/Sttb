using STTB_BE.Contracts.ResponseModels.Media;

namespace STTB_BE.Contracts.ResponseModels.Media;

public class GetMediaListResponse
{
    public List<GetMediaResponse> Items { get; set; } = new();
}