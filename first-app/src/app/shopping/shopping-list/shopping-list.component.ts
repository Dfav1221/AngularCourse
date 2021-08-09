import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";
import {Subscribable, Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private igChangeSub:Subscription;

  ingredients: Ingredient[];

  constructor(private shoppingService:ShoppingService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
