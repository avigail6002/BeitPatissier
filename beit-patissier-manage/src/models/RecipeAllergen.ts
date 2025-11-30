import { Recipe } from './Recipe';
import { Allergen } from './Allergen';

export class RecipeAllergen {
    recipeId: number;
    recipe: Recipe;
    allergenId: number;
    allergen: Allergen;

    constructor(
        recipeId: number,
        recipe: Recipe,
        allergenId: number,
        allergen: Allergen
    ) {
        this.recipeId = recipeId;
        this.recipe = recipe;
        this.allergenId = allergenId;
        this.allergen = allergen;
    }
}
