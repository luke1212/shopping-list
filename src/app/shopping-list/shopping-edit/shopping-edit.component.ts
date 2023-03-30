import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('NameInput') nameInputRef: ElementRef;
  @ViewChild('AmountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();

  onAddItem() {
    this.ingredientAdded.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    });
  }
}
