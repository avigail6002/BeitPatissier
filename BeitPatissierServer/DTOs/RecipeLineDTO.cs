using BeitPatissierServer.Models;
using System.ComponentModel.DataAnnotations;

namespace BeitPatissierServer.DTOs
{
    public class RecipeLineDTO
    {
        public int RecipeLineId { get; set; }
        public int IngredientId { get; set; }
        public string IngredientName { get; set; }
        public decimal Quantity { get; set; }
        public UnitEnum Unit { get; set; }
    }
    public enum UnitEnum
    {
        [Display(Name = "קילו")]
        Kilo,
        [Display(Name = "גרם")]
        Gram,
        [Display(Name = "ליטר")]
        Liter,
        [Display(Name = "מלליטר")]
        Milliliter,
        [Display(Name = "כף")]
        Tablespoon,
        [Display(Name = "כפית")]
        Teaspoon,
        [Display(Name = "קורט")]
        Pinch,
        [Display(Name = "יחידה")]
        Unit
    }
}
