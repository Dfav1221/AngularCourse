import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  editing = new Subject<number>()
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('pasta', 2),
    new Ingredient('tomato', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index:number){
    return this.ingredients[index];
  }

  constructor() {
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredients = this.groupByName(this.ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredients = this.groupByName(this.ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }

  updateIngredient(index:number,ingredient:Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  private groupByName(ingredients: Ingredient[]) {
    let groups = [];
    ingredients.forEach(i => {
      let group = groups.find(ig => ig.name == i.name);
      if (group) {
        group.amount += i.amount;
      } else {
        groups.push(new Ingredient(i.name, i.amount));
      }
    })
    return groups;
  }

  deleteItem(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
