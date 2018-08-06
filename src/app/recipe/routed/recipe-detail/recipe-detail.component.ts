import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/model/recipe.model";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe = Recipe;

  toggled = false;
  @Input() overview = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggled = !this.toggled;
  }



}
