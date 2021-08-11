import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((recipe) => {
      this.recipe = this.recipeService.getRecipeById(recipe['id']);
    });
  }

  onAddToList() {
    this.recipeService.addToShoppingList(this.recipe);
  }

  onDeleteRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe);
    this.router.navigate(['../'], {relativeTo:this.route})
  }
}
