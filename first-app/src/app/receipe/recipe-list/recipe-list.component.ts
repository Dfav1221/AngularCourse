import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("baguette","french","https://www.carrefour.pl/images/product/org/bagietka-z-maslem-i-czosnkiem-165-g-ioojis.jpg"),
    new Recipe("spaghetti","italian","https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/spaghetti_bolognese_01.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
