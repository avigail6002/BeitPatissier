using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.Models
{
    public class RecipeLine
    {
        public int RecipeLineId { get; set; }
        public int RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public Recipe Recipe { get; set; }
        public int IngredientId { get; set; }
        [ForeignKey(nameof(IngredientId))]
        public Ingredient Ingredient { get; set; }
        public UnitEnum Unit { get; set; } // יחידת מידה (למשל: ק"ג, ליטר)

        public decimal Quantity { get; set; } // כמות חומר הגלם במתכון
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
