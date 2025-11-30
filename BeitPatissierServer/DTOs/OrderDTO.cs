namespace BeitPatissierServer.DTOs
{
    public class OrderDTO
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }

        public int UserId { get; set; }  // מזהה המשתמש בלבד

        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPhone { get; set; }
        public string ShippingAddress { get; set; }

        public decimal TotalAmount { get; set; }
        public List<OrderLineDTO> OrderLines { get; set; }
    }
}
