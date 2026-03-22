using Entities.Beritas;
using MediatR;

namespace STTB_BE.Contracts.RequestModels.Berita;

public class CreateBeritaRequest : IRequest<Guid>
{
    public string Title { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public string ThumbnailUrl { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public string Taglines { get; set; } = string.Empty;
    public BeritaStatus? Status { get; set; } = BeritaStatus.Draft;
    public string AuthorId { get; set; } = string.Empty;

}