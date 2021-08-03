import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './receipe/recipe.component';
import { RecipeItemComponent } from './receipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './receipe/recipe-details/recipe-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {RecipeListComponent} from "./receipe/recipe-list/recipe-list.component";


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
