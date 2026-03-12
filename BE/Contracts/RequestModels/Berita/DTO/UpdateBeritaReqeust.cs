using MediatR;

namespace STTB_BE.Contracts.RequestModels.Berita;

public class UpdateBeritaRequest : IRequest<bool>
{
    public Guid Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public string ThumbnailUrl { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public string Taglines { get; set; } = string.Empty;
}