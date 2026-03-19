using MediatR;
using Microsoft.Extensions.Logging;
using STTB_BE.Commons.RequestHandlers.Berita;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Entities;

namespace STTB_BE.Commons.RequestHandlers.Berita;

public class DeleteBeritaRequestHandler :
    IRequestHandler<DeleteBeritaRequest, bool>
{
    private readonly ApplicationDbContext _db;
    private readonly ILogger<DeleteBeritaRequestHandler> _logger;

    public DeleteBeritaRequestHandler(ApplicationDbContext db, ILogger<DeleteBeritaRequestHandler> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<bool> Handle(
        DeleteBeritaRequest request,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Deleting old news with title: {Id}", request.Id);
        var berita = await _db.Beritas.FindAsync(request.Id);

        if (berita == null)
            return false;

        _db.Beritas.Remove(berita);

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}