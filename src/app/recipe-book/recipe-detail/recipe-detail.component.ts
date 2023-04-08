import { Component, Input } from '@angular/core';
import { Recipe } from '../../sheared/recipe.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ingredient } from 'src/app/sheared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeDetail: Recipe;

  constructor(private shoppingService: ShoppingService) { }
  addToShoppingList() {
    this.recipeDetail.ingredients.map(ingredient => this.shoppingService.addIngredient(ingredient));
  }
}
