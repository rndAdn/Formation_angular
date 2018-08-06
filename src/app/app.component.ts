import { Component, OnInit } from '@angular/core';
import {Recipe} from "./shared/model/recipe.model";
import {RecipeService} from "./shared/recipe.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktail renaud';

}
