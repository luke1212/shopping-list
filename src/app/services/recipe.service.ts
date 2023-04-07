import { EventEmitter } from "@angular/core";
import { ingredient } from "../sheared/ingredient.model";
import { Recipe } from "../sheared/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [new ingredient('Meat', 1), new ingredient('French Fries', 20)]),
        new Recipe('Another Test Recipe', 'This is simply a test',
            'https://cdn.wikifarmer.com/wp-content/uploads/2022/02/%E5%85%B3%E4%BA%8E%E7%8C%AA%E7%9A%84%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E8%A7%A3%E7%AD%94.jpg',
            [new ingredient('Buns', 2), new ingredient('Meat', 1)])];
    public getRecipes() {
        return this.recipes.slice(); // return a copy of the array instead of the original array
    }
}