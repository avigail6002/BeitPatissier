using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BeitPatissierServer.Migrations
{
    /// <inheritdoc />
    public partial class add_seed_to_context : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Allergens",
                columns: new[] { "AllergenId", "Name" },
                values: new object[,]
                {
                    { 1, "גלוטן" },
                    { 2, "אגוזים" },
                    { 3, "ביצים" },
                    { 4, "חלב" }
                });

            migrationBuilder.InsertData(
                table: "Ingredients",
                columns: new[] { "IngredientId", "Name", "PricePerUnit" },
                values: new object[,]
                {
                    { 1, "אבקת שקדים", 0m },
                    { 2, "סוכר", 0m },
                    { 3, "חלבון ביצה", 0m },
                    { 4, "חמאה", 0m },
                    { 5, "קמח", 0m },
                    { 6, "שמרים", 0m }
                });

            migrationBuilder.InsertData(
                table: "Recipes",
                columns: new[] { "RecipeId", "AllergenId", "CookingTime", "Description", "Name", "PreparationTime", "Servings", "Steps" },
                values: new object[,]
                {
                    { 1, null, 15, "מקרון חלבי עשיר בטעם פיסטוק", "מקרון", 30, 12, "[\"\\u05DC\\u05D4\\u05E7\\u05E6\\u05D9\\u05E3 \\u05D7\\u05DC\\u05D1\\u05D5\\u05E0\\u05D9\\u05DD\",\"\\u05DC\\u05E7\\u05E4\\u05DC \\u05D0\\u05D1\\u05E7\\u05EA \\u05E1\\u05D5\\u05DB\\u05E8 \\u05D5\\u05E9\\u05E7\\u05D3\\u05D9\\u05DD\",\"\\u05DC\\u05D6\\u05DC\\u05E3 \\u05E2\\u05D9\\u05D2\\u05D5\\u05DC\\u05D9\\u05DD\",\"\\u05DC\\u05D0\\u05E4\\u05D5\\u05EA \\u05D1\\u05D7\\u05D5\\u05DD \\u05E0\\u05DE\\u05D5\\u05DA\",\"\\u05DC\\u05DE\\u05DC\\u05D0 \\u05D1\\u05E7\\u05E8\\u05DD \\u05E4\\u05D9\\u05E1\\u05D8\\u05D5\\u05E7\"]" },
                    { 2, null, 25, "קראוסון ממולא גבינות", "קראוסון", 120, 8, "[\"\\u05DC\\u05DC\\u05D5\\u05E9 \\u05D1\\u05E6\\u05E7 \\u05E9\\u05DE\\u05E8\\u05D9\\u05DD\",\"\\u05DC\\u05E7\\u05E4\\u05DC \\u05E9\\u05DB\\u05D1\\u05D5\\u05EA \\u05D7\\u05DE\\u05D0\\u05D4\",\"\\u05DC\\u05D2\\u05DC\\u05D2\\u05DC \\u05D5\\u05DC\\u05E4\\u05E8\\u05D5\\u05E1\",\"\\u05DC\\u05D4\\u05EA\\u05E4\\u05D9\\u05D7\",\"\\u05DC\\u05D0\\u05E4\\u05D5\\u05EA \\u05E2\\u05D3 \\u05D4\\u05D6\\u05D4\\u05D1\\u05D4\"]" }
                });

            migrationBuilder.InsertData(
                table: "Tags",
                columns: new[] { "TagId", "CategoryId", "Name", "TagType" },
                values: new object[,]
                {
                    { 1, 0, "פטיפורים", 0 },
                    { 2, 0, "מאפים", 0 }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "Description", "Name", "Price", "RecipeId" },
                values: new object[,]
                {
                    { 1, "מקרון עדין משקדים במגוון טעמים.", "מקרון", 120m, 1 },
                    { 2, "קראוסון חמאה קלאסי וטרי.", "קראוסון", 40m, 2 }
                });

            migrationBuilder.InsertData(
                table: "RecipeAllergen",
                columns: new[] { "AllergenId", "RecipeId" },
                values: new object[,]
                {
                    { 2, 1 },
                    { 3, 1 },
                    { 4, 1 },
                    { 1, 2 },
                    { 3, 2 },
                    { 4, 2 }
                });

            migrationBuilder.InsertData(
                table: "RecipeLines",
                columns: new[] { "RecipeLineId", "IngredientId", "Quantity", "RecipeId", "Unit" },
                values: new object[,]
                {
                    { 1, 1, 120m, 1, 0 },
                    { 2, 2, 150m, 1, 0 },
                    { 3, 3, 3m, 1, 0 },
                    { 4, 4, 50m, 1, 0 },
                    { 5, 5, 250m, 2, 0 },
                    { 6, 2, 50m, 2, 0 },
                    { 7, 4, 150m, 2, 0 },
                    { 8, 6, 10m, 2, 0 }
                });

            migrationBuilder.InsertData(
                table: "ProductTags",
                columns: new[] { "ProductId", "TagId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 2, 2 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductTags",
                keyColumns: new[] { "ProductId", "TagId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "ProductTags",
                keyColumns: new[] { "ProductId", "TagId" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "RecipeAllergen",
                keyColumns: new[] { "AllergenId", "RecipeId" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "RecipeAllergen",
                keyColumns: new[] { "AllergenId", "RecipeId" },
                keyValues: new object[] { 3, 1 });

            migrationBuilder.DeleteData(
                table: "RecipeAllergen",
                keyColumns: new[] { "AllergenId", "RecipeId" },
                keyValues: new object[] { 4, 1 });

            migrationBuilder.DeleteData(
                table: "RecipeAllergen",
                keyColumns: new[] { "AllergenId", "RecipeId" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "RecipeAllergen",
                keyColumns: new[] { "AllergenId", "RecipeId" },
                keyValues: new object[] { 3, 2 });

            migrationBuilder.DeleteData(
                table: "RecipeAllergen",
                keyColumns: new[] { "AllergenId", "RecipeId" },
                keyValues: new object[] { 4, 2 });

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "RecipeLines",
                keyColumn: "RecipeLineId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Allergens",
                keyColumn: "AllergenId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Allergens",
                keyColumn: "AllergenId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Allergens",
                keyColumn: "AllergenId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Allergens",
                keyColumn: "AllergenId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "IngredientId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "IngredientId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "IngredientId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "IngredientId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "IngredientId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "IngredientId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Tags",
                keyColumn: "TagId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Tags",
                keyColumn: "TagId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 2);
        }
    }
}
