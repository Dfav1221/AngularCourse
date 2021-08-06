import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  name:string;
  editMode = false;

  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((r:Params)=>{
      this.name = r['id'];
      this.editMode = r['id'] != null;
    })
  }
}
