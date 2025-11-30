using BeitPatissierServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BeitPatissierServer.Data
{
    public class ModelBuilderExtensions
    {
        public static void SeedData(ModelBuilder builder)
        {
            //// Roles
            //builder.Entity<IdentityRole<int>>().HasData(
            //    new IdentityRole<int> { Id = 1, Name = "Admin", NormalizedName = "ADMIN" },
            //    new IdentityRole<int> { Id = 2, Name = "Employee", NormalizedName = "EMPLOYEE" },
            //    new IdentityRole<int> { Id = 3, Name = "Customer", NormalizedName = "CUSTOMER" }
            //);

            // Users
            //הסיסמא לכולם היא Test123!

            var manager1 = new BPUser
            {
                Id = 2,
                UserName = "manager1",
                NormalizedUserName = "MANAGER1",
                Email = "manager1@example.com",
                NormalizedEmail = "MANAGER1@EXAMPLE.COM",
                EmailConfirmed = true,
                FirstName = "Mali",
                LastName = "Levi",
                PasswordHash = "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw=="
            };

            var manager2 = new BPUser
            {
                Id = 3,
                UserName = "manager2",
                NormalizedUserName = "MANAGER2",
                Email = "manager2@example.com",
                NormalizedEmail = "MANAGER2@EXAMPLE.COM",
                EmailConfirmed = true,
                FirstName = "Sara",
                LastName = "Cohen",
                PasswordHash = "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw=="
            };

            var customer1 = new BPUser
            {
                Id = 4,
                UserName = "customer1",
                NormalizedUserName = "CUSTOMER1",
                Email = "customer1@example.com",
                NormalizedEmail = "CUSTOMER1@EXAMPLE.COM",
                EmailConfirmed = true,
                FirstName = "Avi",
                LastName = "Halevi",
                PasswordHash = "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw=="
            };

            var customer2 = new BPUser
            {
                Id = 5,
                UserName = "customer2",
                NormalizedUserName = "CUSTOMER2",
                Email = "customer2@example.com",
                NormalizedEmail = "CUSTOMER2@EXAMPLE.COM",
                EmailConfirmed = true,
                FirstName = "Rachel",
                LastName = "Bar",
                PasswordHash = "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw=="
            };

            var customer3 = new BPUser
            {
                Id = 6,
                UserName = "customer3",
                NormalizedUserName = "CUSTOMER3",
                Email = "customer3@example.com",
                NormalizedEmail = "CUSTOMER3@EXAMPLE.COM",
                EmailConfirmed = true,
                FirstName = "David",
                LastName = "Tal",
                PasswordHash = "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw=="
            };

            builder.Entity<BPUser>().HasData(manager1, manager2, customer1, customer2, customer3);

            builder.Entity<IdentityUserRole<int>>().HasData(
                // Managers
                new IdentityUserRole<int> { UserId = 2, RoleId = 2 },
                new IdentityUserRole<int> { UserId = 3, RoleId = 2 },

                // Customers
                new IdentityUserRole<int> { UserId = 4, RoleId = 3 },
                new IdentityUserRole<int> { UserId = 5, RoleId = 3 },
                new IdentityUserRole<int> { UserId = 6, RoleId = 3 }
            );



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

            // Contact
            builder.Entity<Contact>().HasData(
    // פתוחות
    new Contact
    {
        ContactId = 1,
        UserId = 6,
        UserName = "Avi User",
        Email = "avi@example.com",
        Phone = "0501234567",
        Subject = "בעיה בהתחברות",
        Message = "לא מצליח להתחבר למערכת",
        Status = ContactStatusEnum.Open
    },
    new Contact
    {
        ContactId = 2,
        UserId = 6,
        UserName = "Avi User",
        Email = "avi@example.com",
        Phone = "0501234567",
        Subject = "באג בהזמנה",
        Message = "הזמנה לא נסגרת",
        Status = ContactStatusEnum.Open
    },
    new Contact
    {
        ContactId = 3,
        UserId = 4,
        UserName = "Avi User",
        Email = "avi@example.com",
        Phone = "0501234567",
        Subject = "עדכון פרטים",
        Message = "מבקש לעדכן טלפון",
        Status = ContactStatusEnum.Open
    },

    new Contact
    {
        ContactId = 4,
        UserId = null,
        UserName = "Mali",
        Email = "mali@example.com",
        Phone = "0529988776",
        Subject = "שאלה על משלוח",
        Message = "מתי מגיע?",
        Status = ContactStatusEnum.Open
    },
    new Contact
    {
        ContactId = 5,
        UserId = null,
        UserName = "Sara",
        Email = "sara@example.com",
        Phone = "0534455667",
        Subject = "בקשה לתיקון",
        Message = "הפרטים שלי לא מעודכנים",
        Status = ContactStatusEnum.Open
    },

    new Contact
    {
        ContactId = 6,
        UserId = null,
        UserName = "Dan",
        Email = "dan@example.com",
        Phone = "0547891122",
        Subject = "סגור 1",
        Message = "טופל",
        Status = ContactStatusEnum.Closed
    },
    new Contact
    {
        ContactId = 7,
        UserId = null,
        UserName = "Hadas",
        Email = "hadas@example.com",
        Phone = "0585566778",
        Subject = "סגור 2",
        Message = "נפתר",
        Status = ContactStatusEnum.Closed
    },
    new Contact
    {
        ContactId = 8,
        UserId = null,
        UserName = "Roni",
        Email = "roni@example.com",
        Phone = "0573322110",
        Subject = "סגור 3",
        Message = "הסתדר",
        Status = ContactStatusEnum.Closed
    }
);



        }
    }
}
