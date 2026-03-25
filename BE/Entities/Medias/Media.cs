using System.ComponentModel.DataAnnotations;

namespace STTB_BE.Entities;

public class Media
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    [StringLength(50)]
    public string FormatMedia { get; set; } = string.Empty; // Video / Artikel

    [StringLength(100)]
    public string TopikKategori { get; set; } = string.Empty;

    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;

    [StringLength(500)]
    public string ThumbnailUrl { get; set; } = string.Empty;

    [Required]
    [StringLength(500)]
    public string ContentUrl { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }
    public string Status { get; set; } = string.Empty;
}