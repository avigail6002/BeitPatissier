import { RecipeLine } from './RecipeLine';
import { RecipeAllergen } from './RecipeAllergen';

export class Recipe {
    recipeId: number;
    name: string;
    description: string;
    recipeLines: RecipeLine[];
    steps: string[];
    preparationTime: number;
    cookingTime: number;
    servings: number;
    allergens: RecipeAllergen[];

    constructor(
        recipeId: number,
        name: string,
        description: string,
        recipeLines: RecipeLine[] = [],
        steps: string[] = [],
        preparationTime: number = 0,
        cookingTime: number = 0,
        servings: number = 0,
        allergens: RecipeAllergen[] = []
    ) {
        this.recipeId = recipeId;
        this.name = name;
        this.description = description;
        this.recipeLines = recipeLines;
        this.steps = steps;
        this.preparationTime = preparationTime;
        this.cookingTime = cookingTime;
        this.servings = servings;
        this.allergens = allergens;
    }
}
