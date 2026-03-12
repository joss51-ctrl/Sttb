using System.ComponentModel.DataAnnotations;

namespace STTB_BE.Entities;

public class Berita
{
    [Key]
    public Guid Id { get; set; }

    [StringLength(200)]
    public string Title { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    [StringLength(500)]
    public string ThumbnailUrl { get; set; } = string.Empty;

    [StringLength(100)]
    public string Category { get; set; } = string.Empty;

    public string Taglines { get; set; } = string.Empty;

    public DateOnly CreatedAt { get; set; }
}