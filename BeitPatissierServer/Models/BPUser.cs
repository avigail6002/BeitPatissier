using Microsoft.AspNetCore.Identity;
using System;

namespace BeitPatissierServer.Models
{
    public class BPUser : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime JoinDate { get; set; }
        public ICollection<Order> UserOrders { get; set; }

        //שדות לשחזור סיסמא במייל
        public string? PasswordResetCode { get; set; }
        public DateTime? PasswordResetCodeExpires { get; set; }
        public DateTime? PasswordResetCodeCreatedAt { get; set; }
    }
}
