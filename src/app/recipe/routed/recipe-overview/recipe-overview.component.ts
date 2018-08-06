import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../../shared/recipe.service";
import {Recipe} from "../../../shared/model/recipe.model";

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {

  recipe: Recipe;


  constructor(private _recipeService: RecipeService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this._recipeService.getRecipieById(id).subscribe(recipe => this.recipe = recipe);
  }


}
