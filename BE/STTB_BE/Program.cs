using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB_BE.Entities;
using STTB_BE.Commons;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddMediatR(
    typeof(STTB_BE.Commons.RequestHandlers.Berita.CreateBeritaRequestHandler));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();