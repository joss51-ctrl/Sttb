using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Entities;

namespace STTB_BE.Entities;

public class ApplicationDbContext : IdentityDbContext<User, Role, Guid>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    // Your existing DbSets
    public DbSet<Berita> Beritas { get; set; }
    public DbSet<Kegiatan> Kegiatans { get; set; }
    public DbSet<Media> Medias { get; set; }
 

    protected override void OnModelCreating(ModelBuilder builder)
    {
        // THIS IS CRITICAL - must call base first
        base.OnModelCreating(builder);

        // Configure table names and keys explicitly
        builder.Entity<User>(entity =>
        {
            entity.ToTable("Users");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();

            entity.HasIndex(e => e.NormalizedUserName).HasDatabaseName("UserNameIndex").IsUnique();
            entity.HasIndex(e => e.NormalizedEmail).HasDatabaseName("EmailIndex");
        });

        builder.Entity<Role>(entity =>
        {
            entity.ToTable("Roles");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();

            entity.HasIndex(e => e.NormalizedName).HasDatabaseName("RoleNameIndex").IsUnique();
        });

        builder.Entity<IdentityUserRole<Guid>>(entity =>
        {
            entity.ToTable("UserRoles");
            entity.HasKey(e => new { e.UserId, e.RoleId });
        });

        builder.Entity<IdentityUserClaim<Guid>>(entity =>
        {
            entity.ToTable("UserClaims");
            entity.HasKey(e => e.Id);
        });

        builder.Entity<IdentityUserLogin<Guid>>(entity =>
        {
            entity.ToTable("UserLogins");
            entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });
        });

        builder.Entity<IdentityUserToken<Guid>>(entity =>
        {
            entity.ToTable("UserTokens");
            entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });
        });

        builder.Entity<IdentityRoleClaim<Guid>>(entity =>
        {
            entity.ToTable("RoleClaims");
            entity.HasKey(e => e.Id);
        });

        // Configure your existing entities
        builder.Entity<Berita>(entity =>
        {
            entity.ToTable("Beritas");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Content).IsRequired();
            entity.Property(e => e.Taglines).HasMaxLength(500); // Just set max length
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETDATE()");
        });

        builder.Entity<Kegiatan>(entity =>
        {
            entity.ToTable("Kegiatans");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
        });

        builder.Entity<Media>(entity =>
        {
            entity.ToTable("Medias");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
        });
    }
}