namespace BeitPatissierServer.Models
{
    public class Ingredient //חומר גלם
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public decimal PricePerUnit { get; set; } // מחיר ליחידת מידה
    }
}
