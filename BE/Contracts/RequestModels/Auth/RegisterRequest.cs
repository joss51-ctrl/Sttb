// Contracts/RequestModels/Auth/RegisterRequest.cs
using MediatR;
using STTB_BE.Contracts.ResponseModels.Auth;

namespace STTB_BE.Contracts.RequestModels.Auth;

public class RegisterRequest : IRequest<LoginResponse>
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Role { get; set; } = "Editor"; // Default role
}