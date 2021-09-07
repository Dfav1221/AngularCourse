import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../receipe/recipe.service";
import {Recipe} from "../receipe/recipe.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeStorageService {

  private baseUrl = "https://ng-course-c322e-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${this.baseUrl}/recipes.json`, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(`${this.baseUrl}/recipes.json`)
      .pipe(map(recipes => {
          return <Recipe[]>recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
          });
        }),
        tap(recipes=>{
          this.recipeService.setRecipes(recipes);
        })
      );

  }

}
