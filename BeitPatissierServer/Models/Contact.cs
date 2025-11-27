using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.Models
{
    public class Contact
    {
        public int ContactId { get; set; }
        public int? UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public BPUser User { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
        public string Subject { get; set; }
        public ContactStatusEnum Status { get; set; }
    }
    public enum ContactStatusEnum
    {
        [Display(Name = "פתוח")]
        Open,
        [Display(Name = "סגור")]
        Closed
    }

}