namespace BeitPatissierServer.DTOs
{
    public class OrderLineDTO
    {
        public int OrderLineId { get; set; }     // מזהה ייחודי של השורה
        public int OrderId { get; set; }         // מזהה ההזמנה שאליה השורה שייכת
        public int ProductId { get; set; }       // מזהה המוצר בלבד
        public string ProductName { get; set; }  // שם המוצר להצגה
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }   // מחיר ליחידה
        public decimal LineTotal { get; set; }   // Quantity * UnitPrice
    }
}
