namespace BeitPatissierServer.DTOs
{
    public class IngredientDTO
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public decimal PricePerUnit { get; set; } // מחיר ליחידת מידה
    }
}

