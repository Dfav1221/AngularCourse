import {Component, OnInit} from '@angular/core';
import {RecipeStorageService} from "../shared/recipe-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private recipeStorageService: RecipeStorageService
  ) {
  }

  ngOnInit(): void {
  }

  onSaveData() {
    this.recipeStorageService.storeRecipes();
  }

  onFetchData() {
    this.recipeStorageService.fetchRecipes().subscribe();
  }
}
