using BeitPatissierServer.Models;
using Microsoft.EntityFrameworkCore;

namespace BeitPatissierServer.Data
{
    public class ModelBuilderExtensions
    {
        public static void SeedData(ModelBuilder builder)
        {
            // Tags
            builder.Entity<Tag>().HasData(
                new Tag { TagId = 1, Name = "פטיפורים" },
                new Tag { TagId = 2, Name = "מאפים" }
            );

            // Allergens
            builder.Entity<Allergen>().HasData(
                new Allergen { AllergenId = 1, Name = "גלוטן" },
                new Allergen { AllergenId = 2, Name = "אגוזים" },
                new Allergen { AllergenId = 3, Name = "ביצים" },
                new Allergen { AllergenId = 4, Name = "חלב" }
            );

            // Ingredients
            builder.Entity<Ingredient>().HasData(
                new Ingredient { IngredientId = 1, Name = "אבקת שקדים" },
                new Ingredient { IngredientId = 2, Name = "סוכר" },
                new Ingredient { IngredientId = 3, Name = "חלבון ביצה" },
                new Ingredient { IngredientId = 4, Name = "חמאה" },
                new Ingredient { IngredientId = 5, Name = "קמח" },
                new Ingredient { IngredientId = 6, Name = "שמרים" }
            );

            // Recipes
            builder.Entity<Recipe>().HasData(
                new Recipe { RecipeId = 1, Name = "מקרון", Description = "מקרון חלבי עשיר בטעם פיסטוק",
                    PreparationTime = 30, CookingTime = 15, Servings = 12, Steps = new List<string>
                    {
                        "להקציף חלבונים",
                        "לקפל אבקת סוכר ושקדים",
                        "לזלף עיגולים",
                        "לאפות בחום נמוך",
                        "למלא בקרם פיסטוק"
                    }
                },
                new Recipe { RecipeId = 2, Name = "קראוסון", Description = "קראוסון ממולא גבינות",
                    PreparationTime = 120, CookingTime = 25, Servings = 8, Steps = new List<string>
                    {
                        "ללוש בצק שמרים",
                        "לקפל שכבות חמאה",
                        "לגלגל ולפרוס",
                        "להתפיח",
                        "לאפות עד הזהבה"
                    }
                }
            );

            // RecipeLines
            builder.Entity<RecipeLine>().HasData(
                // Macaron
                new RecipeLine { RecipeLineId = 1, RecipeId = 1, IngredientId = 1, Quantity = 120m }, // אבקת שקדים
                new RecipeLine { RecipeLineId = 2, RecipeId = 1, IngredientId = 2, Quantity = 150m }, // סוכר
                new RecipeLine { RecipeLineId = 3, RecipeId = 1, IngredientId = 3, Quantity = 3m },   // חלבון ביצה
                new RecipeLine { RecipeLineId = 4, RecipeId = 1, IngredientId = 4, Quantity = 50m },  // חמאה

                // Croissant
                new RecipeLine { RecipeLineId = 5, RecipeId = 2, IngredientId = 5, Quantity = 250m }, // קמח
                new RecipeLine { RecipeLineId = 6, RecipeId = 2, IngredientId = 2, Quantity = 50m },  // סוכר
                new RecipeLine { RecipeLineId = 7, RecipeId = 2, IngredientId = 4, Quantity = 150m }, // חמאה
                new RecipeLine { RecipeLineId = 8, RecipeId = 2, IngredientId = 6, Quantity = 10m }   // שמרים
            );

            // Products
            builder.Entity<Product>().HasData(
                new Product { ProductId = 1, Name = "מקרון", Description = "מקרון עדין משקדים במגוון טעמים.", Price = 120m, RecipeId = 1 },
                new Product { ProductId = 2, Name = "קראוסון", Description = "קראוסון חמאה קלאסי וטרי.", Price = 40m, RecipeId = 2 }
            );

            // ProductTags
            builder.Entity<ProductTag>().HasData(
                new ProductTag { ProductId = 1, TagId = 1 },
                new ProductTag { ProductId = 2, TagId = 2 }
            );

            // ProductAllergens
            builder.Entity<RecipeAllergen>().HasData(
                new RecipeAllergen { RecipeId = 1, AllergenId = 2 }, // אגוזים
                new RecipeAllergen { RecipeId = 1, AllergenId = 3 }, // ביצים
                new RecipeAllergen { RecipeId = 1, AllergenId = 4 }, // חלב

                new RecipeAllergen { RecipeId = 2, AllergenId = 1 }, // גלוטן
                new RecipeAllergen { RecipeId = 2, AllergenId = 3 }, // ביצים
                new RecipeAllergen { RecipeId = 2, AllergenId = 4 }  // חלב
            );
        }
    }
}
