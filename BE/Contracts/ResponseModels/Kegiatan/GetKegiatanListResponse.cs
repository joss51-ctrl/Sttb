using STTB_BE.Contracts.ResponseModels.Kegiatan;

namespace STTB_BE.Contracts.ResponseModels.Kegiatan;

public class GetKegiatanListResponse
{
    public List<GetKegiatanResponse> Items { get; set; } = new();
}