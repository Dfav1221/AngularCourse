import {EventEmitter, Output} from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() recipeDetails = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeDetails.emit();
  }
}
