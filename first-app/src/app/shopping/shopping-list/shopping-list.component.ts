import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnChanges {
  ingredients: Ingredient[] = [
    new Ingredient('pasta', 2),
    new Ingredient('tomato', 10)
  ];

  @Input() newIngredient: Ingredient;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let newIngredient = changes['newIngredient'].currentValue
    if (!!newIngredient){
      this.ingredients.push(newIngredient);
      console.log(newIngredient.currentValue);
    }
  }

  ngOnInit(): void {
  }

}
