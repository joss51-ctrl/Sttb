using MediatR;
using STTB_BE.Entities;
using STTB_BE.Contracts.ResponseModels.Berita;
using STTB_BE.Contracts.RequestModels.Berita.DTO;

public class GetBeritaRequestHandler :
    IRequestHandler<GetBeritaRequest, BeritaResponse>
{
    private readonly ApplicationDbContext _db;

    public GetBeritaRequestHandler(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<BeritaResponse> Handle(
        GetBeritaRequest request,
        CancellationToken cancellationToken)
    {
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
            CreatedAt = berita.CreatedAt
        };
    }
}