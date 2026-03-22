using MediatR;
using Microsoft.Extensions.Logging;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Contracts.RequestModels.Berita.DTO;
using STTB_BE.Contracts.ResponseModels.Berita;
using STTB_BE.Entities;

public class GetBeritaRequestHandler :
    IRequestHandler<GetBeritaRequest, BeritaResponse>
{
    private readonly ApplicationDbContext _db;
    private readonly ILogger<GetBeritaRequestHandler> _logger;

    public GetBeritaRequestHandler(ApplicationDbContext db, ILogger<GetBeritaRequestHandler> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<BeritaResponse> Handle(
        GetBeritaRequest request,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation("Here are the {Id} of the press", request.Id);
        var berita = await _db.Beritas.FindAsync(request.Id);

        if (berita == null)
            return null;

        return new BeritaResponse
        {
            Id = berita.Id,
            Title = berita.Title,
            Content = berita.Content,
            ThumbnailUrl = berita.ThumbnailUrl,
            Category = berita.Category,
            Taglines = berita.Taglines,
            CreatedAt = berita.CreatedAt,
            AuthorId = berita.AuthorId,
            Status = Entities.Beritas.BeritaStatus.Published
        };
    }
}