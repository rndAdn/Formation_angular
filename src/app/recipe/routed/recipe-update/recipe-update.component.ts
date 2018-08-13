import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/model/recipe.model";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../../../shared/recipe.service";

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {

  recipe: Recipe;

  recipeForm = this.fb.group({
    name: [''],
    url: [''],
    description: ['']
  });


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this._recipeService.getRecipieById(id).subscribe(recipe => {
      this.recipe = recipe;
      this.recipeForm.patchValue({
        name: this.recipe.name,
        url: this.recipe.picture,
        description: this.recipe.description
      });
    });
  }

  onSubmit(){
    console.log(this.recipe);
    const name = this.recipeForm.get('name');

    this.recipe.name = this.recipeForm.get('name').value;


    this.recipe.picture = this.recipeForm.get('url').value;
    this.recipe.description = this.recipeForm.get('description').value;

    console.log(this.recipe);

    this._recipeService.updateRecipe(this.recipe).subscribe(() => {
       return this.router.navigate(['/recipe'])
    });

  }





}
