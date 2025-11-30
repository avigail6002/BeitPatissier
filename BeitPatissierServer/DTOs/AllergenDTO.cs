using BeitPatissierServer.Models;

namespace BeitPatissierServer.DTOs
{
    public class AllergenDTO
    {
        public int AllergenId { get; set; }
        public string Name { get; set; } // שם האלרגן כגון גלוטן, אגוזים וכו
        public ICollection<Recipe> Recipes { get; set; }
    }
}

