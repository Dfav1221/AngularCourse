import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "./receipe/recipe.component";
import {ShoppingListComponent} from "./shopping/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./receipe/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./receipe/recipe-details/recipe-details.component";
import {RecipeEditComponent} from "./receipe/recipe-edit/recipe-edit.component";
import {RecipeResolverService} from "./receipe/recipe-resolver.service";
import {AuthComponent} from "./auth/auth.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ],
    resolve:[RecipeResolverService]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
