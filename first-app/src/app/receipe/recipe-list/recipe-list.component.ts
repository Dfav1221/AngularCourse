import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.mode";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("spaghetti","italian","https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/spaghetti_bolognese_01.jpg"),
    new Recipe("baguette","french","https://lh3.googleusercontent.com/proxy/rw-6lb-r2z0NtVnUg5Cse1kfSoKdjaoUEEeD9hAtPIphPw3UGcSCvTVnbVpumG4kaPDtC8OPFQbUMMHbrHXgkXZSJwGbUf3EIp1myZFXd3rFt8YnbrTc5OtltvCxRWn8")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
