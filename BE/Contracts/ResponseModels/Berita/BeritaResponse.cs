namespace STTB_BE.Contracts.ResponseModels.Berita;

public class BeritaResponse
{
    public Guid Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public string ThumbnailUrl { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public string Taglines { get; set; } = string.Empty;

    public DateOnly CreatedAt { get; set; }
}