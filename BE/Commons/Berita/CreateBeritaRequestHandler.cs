using MediatR;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Entities;

namespace STTB_BE.Commons.RequestHandlers.Berita;

public class CreateBeritaRequestHandler :
    IRequestHandler<CreateBeritaRequest, Guid>
{
    private readonly ApplicationDbContext _db;

    public CreateBeritaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<Guid> Handle(
        CreateBeritaRequest request,
        CancellationToken cancellationToken)
    {
        var berita = new STTB_BE.Entities.Berita
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Content = request.Content,
            ThumbnailUrl = request.ThumbnailUrl,
            Category = request.Category,
            Taglines = request.Taglines,
            CreatedAt = DateOnly.FromDateTime(DateTime.UtcNow)
        };

        _db.Beritas.Add(berita);

        await _db.SaveChangesAsync(cancellationToken);

        return berita.Id;
    }
}