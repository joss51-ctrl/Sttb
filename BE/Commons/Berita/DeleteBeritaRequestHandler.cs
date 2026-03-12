using MediatR;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Entities;

public class DeleteBeritaRequestHandler :
    IRequestHandler<DeleteBeritaRequest, bool>
{
    private readonly ApplicationDbContext _db;

    public DeleteBeritaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<bool> Handle(
        DeleteBeritaRequest request,
        CancellationToken cancellationToken)
    {
        var berita = await _db.Beritas.FindAsync(request.Id);

        if (berita == null)
            return false;

        _db.Beritas.Remove(berita);

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}