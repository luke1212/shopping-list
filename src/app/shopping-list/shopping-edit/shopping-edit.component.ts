import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ingredient } from 'src/app/sheared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('NameInput') nameInputRef: ElementRef;
  @ViewChild('AmountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }
  onAddItem() {
    this.shoppingService.addIngredient(new ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }
}
