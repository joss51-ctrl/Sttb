using MediatR;
using STTB_BE.Contracts.ResponseModels.Auth;

namespace STTB_BE.Contracts.RequestModels.Auth;

public class LoginRequest : IRequest<LoginResponse>
{
    public string Email { get; set; }
    public string Password { get; set; }
}