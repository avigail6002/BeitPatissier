using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; } // שם המוצר
        public string Description { get; set; } // תיאור המוצר
        public int RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public Recipe Recipe { get; set; }
        public decimal Price { get; set; } // מחיר המוצר
        public ICollection<Image> Images { get; set; } // כתובת התמונה של המוצר
        public ICollection<ProductTag> ProductTags { get; set; } //רשימת ארועים מתאימים
    }
}
