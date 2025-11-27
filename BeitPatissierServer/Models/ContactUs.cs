namespace BeitPatissierServer.Models
{
    public enum ContactStatusEnum
    {
        Open,
        Closed
    }

    public class ContactUs
    {
        public int? UserId { get; set; }

        public string? UserName { get; set; }

        public string? Email { get; set; }

        public string? Phone { get; set; }

        public string? Message { get; set; }

        public ContactStatusEnum Status { get; set; }
    }
}