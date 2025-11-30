using BeitPatissierServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace BeitPatissierServer.Data
{
    public class BeitPatissierContext : IdentityDbContext<BPUser, IdentityRole<int>, int>
    {
        public BeitPatissierContext(DbContextOptions<BeitPatissierContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductTag> ProductTags { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeLine> RecipeLines { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Allergen> Allergens { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Contact> Contacts { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Composite key for ProductTag
            builder.Entity<ProductTag>()
                .HasKey(pt => new { pt.ProductId, pt.TagId });

            builder.Entity<RecipeAllergen>()
                .HasKey(pt => new { pt.RecipeId, pt.AllergenId });

            base.OnModelCreating(builder);

            // --- Precision גלובלי ל-decimal ---
            foreach (var property in builder.Model.GetEntityTypes()
                .SelectMany(t => t.GetProperties())
                .Where(p => p.ClrType == typeof(decimal) || p.ClrType == typeof(decimal?)))
            {
                property.SetPrecision(18);
                property.SetScale(2);
            }
            ModelBuilderExtensions.SeedData(builder);
        }
    }
}
