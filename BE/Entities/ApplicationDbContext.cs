using STTB_BE.Entities;
using Microsoft.EntityFrameworkCore;

namespace STTB_BE.Entities;

public class ApplicationDbContext : DbContext
{
    public DbSet<Berita> Beritas => Set<Berita>();
    public DbSet<Media> Medias => Set<Media>();
    public DbSet<Kegiatan> Kegiatans => Set<Kegiatan>();

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Berita>()
            .Property(x => x.CreatedAt)
            .HasConversion<DateOnlyConverter>();
    }
}

public class DateOnlyConverter :
    Microsoft.EntityFrameworkCore.Storage.ValueConversion.ValueConverter<DateOnly, DateTime>
{
    public DateOnlyConverter()
        : base(
            d => d.ToDateTime(TimeOnly.MinValue),
            d => DateOnly.FromDateTime(d))
    { }
}