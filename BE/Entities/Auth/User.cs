using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace STTB_BE.Entities;

public class Role : IdentityRole<Guid> { }

public class User : IdentityUser<Guid>
{
    [StringLength(100)]
    public string FullName { get; set; } = string.Empty;

    [StringLength(50)]
    public string Role { get; set; } = "Editor"; // Super Admin, Content Admin, Editor, Approver

    public DateTime CreatedAt { get; set; }
    public DateTime? LastLoginAt { get; set; }
    public bool IsActive { get; set; } = true;
}