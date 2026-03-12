using MediatR;

namespace STTB_BE.Contracts.RequestModels.Media;

public class UpdateMediaRequest : IRequest<bool>
{
    public Guid Id { get; set; }

    public string FormatMedia { get; set; } = string.Empty;

    public string TopikKategori { get; set; } = string.Empty;

    public string Title { get; set; } = string.Empty;

    public string ThumbnailUrl { get; set; } = string.Empty;

    public string ContentUrl { get; set; } = string.Empty;
}