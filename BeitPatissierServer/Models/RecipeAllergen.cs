using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.Models
{
    public class RecipeAllergen
    {
        public int RecipeId { get; set; }
        [ForeignKey(nameof(RecipeId))]
        public Recipe Recipe { get; set; }

        public int AllergenId { get; set; }
        [ForeignKey(nameof(AllergenId))]
        public Allergen Allergen { get; set; }
    }
}
