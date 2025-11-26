import { Recipe } from './Recipe';

export class Allergen {
    allergenId: number;
    name: string;
    recipes: Recipe[];

    constructor(
        allergenId: number,
        name: string,
        recipes: Recipe[] = []
    ) {
        this.allergenId = allergenId;
        this.name = name;
        this.recipes = recipes;
    }
}
