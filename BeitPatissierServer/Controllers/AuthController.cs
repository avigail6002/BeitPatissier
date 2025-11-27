//using BeitPatissierServer.DTOs;
//using BeitPatissierServer.Models;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using Google.Apis.Auth;
//using System.IdentityModel.Tokens.Jwt;
//using System.Text;

//namespace BeitPatissierServer.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class AuthController : ControllerBase
//    {
//        private readonly UserManager<BPUser> _userManager;
//        private readonly IConfiguration _configuration;

//        public AuthController(UserManager<BPUser> userManager, IConfiguration configuration)
//        {
//            _userManager = userManager;
//            _configuration = configuration;
//        }

//        [HttpPost("google-login")]
//        public async Task<IActionResult> GoogleLogin([FromBody] GoogleLoginRequestDTO request)
//        {
//            try
//            {
//                var payload = await GoogleJsonWebSignature.ValidateAsync(request.IdToken);

//                var user = await _userManager.FindByEmailAsync(payload.Email);
//                if (user == null)
//                {
//                    user = new BPUser
//                    {
//                        UserName = payload.Email,
//                        NormalizedUserName = payload.Email.ToUpper(),
//                        Email = payload.Email,
//                        NormalizedEmail = payload.Email.ToUpper(),
//                        EmailConfirmed = true,
//                        FirstName = payload.GivenName,
//                        LastName = payload.FamilyName,
//                        ProfileHexColor = "#FFFFFF", 
//                        JoinDate = DateTime.UtcNow
//                    };

//                    var result = await _userManager.CreateAsync(user);
//                    if (!result.Succeeded)
//                        return BadRequest(new { Error = "Failed to create user" });
//                }

//                var token = GenerateJwtToken(user);

//                return Ok(new { Token = token });
//            }
//            catch (Exception ex)
//            {
//                return BadRequest(new { Error = ex.Message });
//            }
//        }

//        private string GenerateJwtToken(BPUser user)
//        {
//            var jwtKey = _configuration["Jwt:Key"];
//            var jwtIssuer = _configuration["Jwt:Issuer"];
//            var jwtAudience = _configuration["Jwt:Audience"];

//            var tokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.UTF8.GetBytes(jwtKey);

//            var userRoles = _userManager.GetRolesAsync(user).Result; 

//            var claims = new List<System.Security.Claims.Claim>
//    {
//        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.NameIdentifier, user.Id.ToString()),
//        new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Email, user.Email)
//    };
//            foreach (var role in userRoles)
//            {
//                claims.Add(new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Role, role));
//            }

//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = new System.Security.Claims.ClaimsIdentity(claims), 
//                Expires = DateTime.UtcNow.AddMinutes(60),
//                Issuer = jwtIssuer,
//                Audience = jwtAudience,
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//            };
//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            return tokenHandler.WriteToken(token);
//        }
//    }
//}
