using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BeitPatissierServer.Migrations
{
    /// <inheritdoc />
    public partial class add_data_to_start : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Allergens_Products_ProductId",
                table: "Allergens");

            migrationBuilder.DropIndex(
                name: "IX_Allergens_ProductId",
                table: "Allergens");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Allergens");

            migrationBuilder.AddColumn<int>(
                name: "AllergenId",
                table: "Recipes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RecipeAllergen",
                columns: table => new
                {
                    RecipeId = table.Column<int>(type: "int", nullable: false),
                    AllergenId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecipeAllergen", x => new { x.RecipeId, x.AllergenId });
                    table.ForeignKey(
                        name: "FK_RecipeAllergen_Allergens_AllergenId",
                        column: x => x.AllergenId,
                        principalTable: "Allergens",
                        principalColumn: "AllergenId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RecipeAllergen_Recipes_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipes",
                        principalColumn: "RecipeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Recipes_AllergenId",
                table: "Recipes",
                column: "AllergenId");

            migrationBuilder.CreateIndex(
                name: "IX_RecipeAllergen_AllergenId",
                table: "RecipeAllergen",
                column: "AllergenId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipes_Allergens_AllergenId",
                table: "Recipes",
                column: "AllergenId",
                principalTable: "Allergens",
                principalColumn: "AllergenId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recipes_Allergens_AllergenId",
                table: "Recipes");

            migrationBuilder.DropTable(
                name: "RecipeAllergen");

            migrationBuilder.DropIndex(
                name: "IX_Recipes_AllergenId",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "AllergenId",
                table: "Recipes");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "Allergens",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Allergens_ProductId",
                table: "Allergens",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Allergens_Products_ProductId",
                table: "Allergens",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "ProductId");
        }
    }
}
