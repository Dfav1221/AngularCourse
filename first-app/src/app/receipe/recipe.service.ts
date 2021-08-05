import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping/shopping.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("baguette",
      "french",
      "https://www.carrefour.pl/images/product/org/bagietka-z-maslem-i-czosnkiem-165-g-ioojis.jpg",
      [new Ingredient('salt', 1), new Ingredient('water', 3)]
    ),
    new Recipe("spaghetti",
      "italian",
      "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/spaghetti_bolognese_01.jpg",
      [new Ingredient('pasta', 2), new Ingredient('tomato', 5)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) {
  }

  getRecipes() {
    return this.recipes.slice(); //array copy
  }

  addToShoppingList(recipe: Recipe) {

    this.shoppingService.addIngredients(recipe.ingredients);

  }
}
