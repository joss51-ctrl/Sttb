using MediatR;
using Microsoft.Extensions.Logging;
using STTB_BE.Contracts.RequestModels.Berita;
using STTB_BE.Entities;

namespace STTB_BE.Commons.RequestHandlers.Berita;

public class CreateBeritaRequestHandler : IRequestHandler<CreateBeritaRequest, Guid>
{
    private readonly ApplicationDbContext _db;
    private readonly ILogger<CreateBeritaRequestHandler> _logger;

    public CreateBeritaRequestHandler(ApplicationDbContext db, ILogger<CreateBeritaRequestHandler> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<Guid> Handle(CreateBeritaRequest request, CancellationToken cancellationToken)
    {
        // 1. Log that we're starting
        _logger.LogInformation("Creating new berita with title: {Title}", request.Title);

        try
        {
            // 2. Validate input (basic check)
            if (string.IsNullOrWhiteSpace(request.Title))
            {
                _logger.LogWarning("Attempted to create berita with empty title");
                throw new ArgumentException("Title is required");
            }

            // 3. Create the entity
            var berita = new STTB_BE.Entities.Berita  // Removed full namespace since we have using
            {
                Id = Guid.NewGuid(),
                Title = request.Title,
                Content = request.Content ?? string.Empty,  // Handle null
                ThumbnailUrl = request.ThumbnailUrl ?? string.Empty,  // Handle null
                Category = request.Category ?? string.Empty,  // Handle null
                Taglines = request.Taglines ?? string.Empty,  // Handle null
                CreatedAt = DateOnly.FromDateTime(DateTime.UtcNow)
            };

            // 4. Add to database
            await _db.Beritas.AddAsync(berita, cancellationToken);  // Use async version

            // 5. Save changes
            var saveResult = await _db.SaveChangesAsync(cancellationToken);

            // 6. Verify save was successful
            if (saveResult <= 0)
            {
                _logger.LogError("Failed to save berita to database");
                throw new InvalidOperationException("Could not save berita to database");
            }

            // 7. Log success with the new ID
            _logger.LogInformation("Successfully created berita with ID: {BeritaId} and title: {Title}",
                berita.Id, berita.Title);

            return berita.Id;
        }
        catch (Exception ex)
        {
            // 8. Log any errors that occur
            _logger.LogError(ex, "Error creating berita with title: {Title}", request.Title);
            throw;  // Re-throw so the controller can handle it
        }
    }
}