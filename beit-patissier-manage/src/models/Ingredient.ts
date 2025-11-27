export class Ingredient {
    ingredientId: number;
    name: string;
    pricePerUnit: number;

    constructor(
        ingredientId: number,
        name: string,
        pricePerUnit: number
    ) {
        this.ingredientId = ingredientId;
        this.name = name;
        this.pricePerUnit = pricePerUnit;
    }
}
