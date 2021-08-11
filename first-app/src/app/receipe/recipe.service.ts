import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping/shopping.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
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

  constructor(private shoppingService: ShoppingService,private router:Router) {
  }

  getRecipes() {
    return this.recipes.slice(); //array copy
  }

  getRecipeById(name: string) {
    return this.recipes.find(recipe => recipe.name === name);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(recipe:Recipe,name:string){
    let oldRecipe = this.getRecipeById(name);
    let index = this.recipes.findIndex(value=>oldRecipe === value);
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  addToShoppingList(recipe: Recipe) {
    this.shoppingService.addIngredients(recipe.ingredients);
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    let index = this.recipes.findIndex(value => recipe === value);
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
