
import { Recipe } from "./Recipe";
import { Image } from "./Image";
import { ProductTag } from "./ProductTag";
import { Allergen } from "./Allergen";

export class Product {
    productId: number;
    name: string;
    description: string;
    recipeId: number;
    recipe: Recipe;
    price: number;
    images: Image[];
    tags: ProductTag[];
    allergens: Allergen[];

    constructor(
        productId: number,
        name: string,
        description: string,
        recipeId: number,
        recipe: Recipe,
        price: number,
        images: Image[],
        tags: ProductTag[],
        allergens: Allergen[]
    ) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.recipeId = recipeId;
        this.recipe = recipe;
        this.price = price;
        this.images = images;
        this.tags = tags;
        this.allergens = allergens;
    }
}
