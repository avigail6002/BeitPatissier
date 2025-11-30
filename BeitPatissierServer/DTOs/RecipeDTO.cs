using System.Collections.Generic;

namespace BeitPatissierServer.DTOs
{
    public class RecipeDTO
    {
        public int RecipeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int PreparationTime { get; set; }
        public int CookingTime { get; set; }
        public int Servings { get; set; }
        public List<string> Steps { get; set; }
        public List<RecipeLineDTO> RecipeLines { get; set; }
        public List<RecipeAllergenDTO> Allergens { get; set; }
    }
}
