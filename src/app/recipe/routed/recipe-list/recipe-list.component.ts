import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/model/recipe.model";
import {RecipeService} from "../../../shared/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[];

  constructor(private _recipeService: RecipeService){}

  ngOnInit(): void {
    this._recipeService.getAllRecipie().subscribe(recipies => this.recipies = recipies);
  }


  delete(recipe: Recipe){
    const index = this.recipies.indexOf(recipe);
    console.log("index ", index);

    this.recipies.splice(index, 1);

  }
}
