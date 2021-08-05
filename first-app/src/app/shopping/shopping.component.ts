import {Component, OnInit, Output} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  @Output() ingredient:Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredient = ingredient;
  }
}
