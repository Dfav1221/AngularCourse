import {EventEmitter, Output} from '@angular/core';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {ShoppingService} from "../../shopping.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false})nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false})amountInputRef:ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddedItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }
}