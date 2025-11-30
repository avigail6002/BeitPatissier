using System.Collections.Generic;

namespace BeitPatissierServer.DTOs
{
    public class ProductDTO
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        // אם את עדיין משתמשת במחיר ו־Recipe, תשאירי. אם לא – מחקי.
        public decimal Price { get; set; }
        public RecipeDTO Recipe { get; set; }

        public List<ImageDTO> Images { get; set; }
        public List<ProductTagDTO> ProductTags { get; set; }
    }
}
