import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../shared/model/recipe.model";
import {RecipeService} from "../../../shared/recipe.service";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  toggled = false;
  @Input() overview = false;

  @Output() deleteEmitter: EventEmitter<Recipe> = new EventEmitter();

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
  }

  toggle(){
    this.toggled = !this.toggled;
  }


  deleteRecipe() {

    this._recipeService.deleteRecipe(this.recipe).subscribe(() => {});

    this.deleteEmitter.emit(this.recipe)


  }


}
