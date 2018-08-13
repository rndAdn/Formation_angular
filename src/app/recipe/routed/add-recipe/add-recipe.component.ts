import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../shared/model/recipe.model";
import {RecipeService} from "../../../shared/recipe.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipe = new Recipe();

  constructor(private _recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  createResource() {
    this.recipe.ingredients = [
      {
        "ingredientId": 1,
        "name": "Dark rum (Appleton Estate Reserve)",
        "quantity": 2,
        "unit": "oz"
      },
      {
        "ingredientId": 2,
        "name": "Fresh lime juice",
        "quantity": 1,
        "unit": "oz"
      },
      {
        "ingredientId": 3,
        "name": "Simple sirup",
        "quantity": 1,
        "unit": "oz"
      }
    ];

    console.log(this.recipe);
    this._recipeService.addRecipe(this.recipe).subscribe(() => {});

    return this.router.navigate(['/recipe'])
  }
}
