using System.ComponentModel.DataAnnotations.Schema;

namespace BeitPatissierServer.Models
{
    public class ProductTag //כגון בר מצווה, בוקר עובדים, יום הולדת
    {
        public int ProductId { get; set; }
        [ForeignKey(nameof(ProductId))]
        public Product Product { get; set; }

        public int TagId { get; set; }
        [ForeignKey(nameof(TagId))]
        public Tag Tag { get; set; }
    }
}
