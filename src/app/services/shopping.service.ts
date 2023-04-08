import { EventEmitter } from "@angular/core";
import { ingredient } from "../sheared/ingredient.model";

export class ShoppingService {
    ingredientsChanged = new EventEmitter<Map<string, number>>();

    ingredients: Map<string, number> = new Map<string, number>([
        ["apples", 5],
        ["tomatoes", 10]
    ]);

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient: ingredient) {
        let ingredientName: string = ingredient.name.toLowerCase();
        if (!this.ingredients.has(ingredientName)) {
            this.ingredients.set(ingredientName, ingredient.amount);
        } else {
            this.ingredients.set(ingredientName, +this.ingredients.get(ingredientName) + +ingredient.amount);
        }
        this.ingredientsChanged.emit(this.ingredients);
    }
}