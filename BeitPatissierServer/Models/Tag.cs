using System.ComponentModel.DataAnnotations;

namespace BeitPatissierServer.Models
{
    public class Tag
    {
        public int TagId { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; } // "חורף", "קיץ", "בוקר עובדים", "בר שיקים", "חלבי", "מתוק" וכו'
        public TagTypeEnum TagType { get; set; } // סוג הקטגוריה
        public ICollection<ProductTag> ProductTags { get; set; } //רשימת ארועים מתאימים
    }

    public enum TagTypeEnum
    {
        [Display(Name = "עונה")]
        Season,     // קיץ, חורף
        [Display(Name = "סוג אירוע")]
        EventType,  // בת מצווה, מסיבת חברות, בוקר עובדים
        [Display(Name = "סגנון")]
        Style,      // בר שיקים, מגשי אירוח
        [Display(Name = "טעם")]
        Taste,      // מתוק/מלוח
        [Display(Name = "כשרות")]
        Kashrut,    // חלבי/פרווה
        [Display(Name = "קהל יעד")]
        Audience    // גברים/נשים/נוער/ילדים
    }

}
