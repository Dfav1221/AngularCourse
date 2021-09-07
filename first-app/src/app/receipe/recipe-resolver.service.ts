import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "./recipe.model";
import {Observable} from "rxjs";
import {RecipeStorageService} from "../shared/recipe-storage.service";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(
    private recipeStorageService: RecipeStorageService,
    private recipeService: RecipeService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0)
      return this.recipeStorageService.fetchRecipes();
    return recipes;
  }
}
