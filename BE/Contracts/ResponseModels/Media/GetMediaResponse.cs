namespace STTB_BE.Contracts.ResponseModels.Media;

public class GetMediaResponse
{
    public Guid Id { get; set; }

    public string FormatMedia { get; set; } = string.Empty;

    public string TopikKategori { get; set; } = string.Empty;

    public string Title { get; set; } = string.Empty;

    public string ThumbnailUrl { get; set; } = string.Empty;

    public string ContentUrl { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }
    public string Status { get; set; }
}