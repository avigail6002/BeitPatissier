using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public BPUser User { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPhone { get; set; }
        public string ShippingAddress { get; set; }
        public ICollection<OrderLine> OrderLines { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
