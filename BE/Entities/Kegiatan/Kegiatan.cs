using System.ComponentModel.DataAnnotations;

namespace STTB_BE.Entities;

public class Kegiatan
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;

    public DateTime StartDateTime { get; set; }

    public DateTime EndDateTime { get; set; }

    [StringLength(200)]
    public string Organizer { get; set; } = string.Empty;

    [StringLength(100)]
    public string Category { get; set; } = string.Empty;

    public bool IsFeatured { get; set; }

    [StringLength(50)]
    public string Status { get; set; } = string.Empty; // Ongoing, Finished, Expired
}