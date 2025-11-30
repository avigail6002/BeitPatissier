
import { Recipe } from "./Recipe";
import { Image } from "./Image";
import { ProductTag } from "./ProductTag";
import { Allergen } from "./Allergen";

export class Product {

    images: Image[];
    name: string;
    description: string;
    allergens: Allergen[];
    tags: ProductTag[];
    price: number;
    productId: number;
    recipeId: number;
    recipe: Recipe;


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

    static ColumnMapping: Record<string, string> = {
        productId: "מספר מוצר",
        name: "שם מוצר",
        description: "תיאור",
        recipeId: "מספר מתכון",
        recipe: "מתכון",
        price: "מחיר",
        images: "תמונות",
        tags: "תגיות",
        allergens: "אלרגנים",
        notes: "הערות",
        action: "פעולות"
    };

    static ColumnMapping2: Record<string, string> = {

        image: "תמונה",
        name: "שם מוצר",
        productId: "מספר מוצר",
        category: "קטגוריה",
        description: "תיאור קצר",
        allergens: "רכיבים אלרגנים",
        tags: "תגיות",
        size: "גודל",
        price: "מחיר"


    };
}


