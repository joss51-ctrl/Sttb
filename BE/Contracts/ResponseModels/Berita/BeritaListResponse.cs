using STTB_BE.Contracts.ResponseModels.Berita;

namespace STTB_BE.Contracts.ResponseModels.Berita;

public class BeritaListResponse
{
    public List<BeritaResponse> Items { get; set; } = new();
}