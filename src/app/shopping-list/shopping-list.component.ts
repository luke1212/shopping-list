import { Component } from '@angular/core';
import { ingredient } from '../sheared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Map<string, number> = new Map<string, number>([
    ["apples", 5],
    ["tomatoes", 10]
  ]);

  onAddIngredient(ingredient: ingredient) {
    let ingredientName: string = ingredient.name.toLowerCase();
    if (!this.ingredients.has(ingredientName)) {
      this.ingredients.set(ingredientName, ingredient.amount);
    } else {
      this.ingredients.set(ingredientName, +this.ingredients.get(ingredientName) + +ingredient.amount);
    }
  }
}
