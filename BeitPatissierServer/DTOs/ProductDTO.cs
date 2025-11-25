using BeitPatissierServer.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.DTOs
{
    public class ProductDTO
    {
        public int ProductId { get; set; }
        public string Name { get; set; } // שם המוצר
        public string Description { get; set; } // תיאור המוצר
        //public RecipeDTO Recipe { get; set; }
        //public decimal Price { get; set; } // מחיר המוצר
        //public List<ImageDTO> Images { get; set; } // כתובת התמונה של המוצר
        //public List<ProductTagDTO> Tags { get; set; } //רשימת ארועים מתאימים
        //public List<AllergenDTO> Allergens { get; set; }
    }
}
