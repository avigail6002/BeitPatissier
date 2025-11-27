import { Recipe } from './Recipe';
import { Ingredient } from './Ingredient';


export enum UnitEnum {
    Kilo = 'Kilo',
    Gram = 'Gram',
    Liter = 'Liter',
    Milliliter = 'Milliliter',
    Tablespoon = 'Tablespoon',
    Teaspoon = 'Teaspoon',
    Pinch = 'Pinch',
    Unit = 'Unit'
}

export class RecipeLine {
    recipeLineId: number;
    recipeId: number;
    recipe: Recipe;
    ingredientId: number;
    ingredient: Ingredient;
    unit: UnitEnum;
    quantity: number;

    
    constructor(
        recipeLineId: number,
        recipeId: number,
        recipe: Recipe,
        ingredientId: number,
        ingredient: Ingredient,
        unit: UnitEnum,
        quantity: number
    ) {
        this.recipeLineId = recipeLineId;
        this.recipeId = recipeId;
        this.recipe = recipe;
        this.ingredientId = ingredientId;
        this.ingredient = ingredient;
        this.unit = unit;
        this.quantity = quantity;
    }
}

export const UnitEnumHebrew: Record<UnitEnum, string> = {
    [UnitEnum.Kilo]: 'קילו',
    [UnitEnum.Gram]: 'גרם',
    [UnitEnum.Liter]: 'ליטר',
    [UnitEnum.Milliliter]: 'מיליליטר',
    [UnitEnum.Tablespoon]: 'כף',
    [UnitEnum.Teaspoon]: 'כפית',
    [UnitEnum.Pinch]: 'קמצוץ',
    [UnitEnum.Unit]: 'יחידה'
};