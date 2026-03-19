using MediatR;
using Microsoft.Extensions.Logging;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Entities;

public class UpdateBeritaRequestHandler :
    IRequestHandler<UpdateBeritaRequest, bool>
{
    private readonly ApplicationDbContext _db;
    private readonly ILogger<UpdateBeritaRequestHandler> _logger;

    public UpdateBeritaRequestHandler(ApplicationDbContext db, ILogger<UpdateBeritaRequestHandler> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<bool> Handle(
        UpdateBeritaRequest request,
        CancellationToken cancellationToken)
    {
        var berita = await _db.Beritas.FindAsync(request.Id);

        if (berita == null)
            return false;

        berita.Title = request.Title;
        berita.Content = request.Content;
        berita.ThumbnailUrl = request.ThumbnailUrl;
        berita.Category = request.Category;
        berita.Taglines = request.Taglines;

        await _db.SaveChangesAsync(cancellationToken);

        return true;
    }
}