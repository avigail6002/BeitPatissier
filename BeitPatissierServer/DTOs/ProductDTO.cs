using System.Collections.Generic;

namespace BeitPatissierServer.DTOs
{
    public class ProductDTO
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public RecipeDTO Recipe { get; set; }
        public List<ImageDTO> Images { get; set; }
        public List<ProductTagDTO> ProductTags { get; set; }
    }
}