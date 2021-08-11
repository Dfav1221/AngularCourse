import {EventEmitter, OnDestroy, Output} from '@angular/core';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {ShoppingService} from "../../shopping.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedNumberIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingService.editing.subscribe((index: number) => {
      this.editMode = true;
      this.editedNumberIndex = index;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });

  }

  onAddedItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, +value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedNumberIndex, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteItem(this.editedNumberIndex);
    this.onClear();
  }
}
