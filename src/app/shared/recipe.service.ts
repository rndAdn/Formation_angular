import { Injectable } from '@angular/core';
import {Recipe} from "./model/recipe.model";
import {Observable, of} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {MOCK_RECIPES} from "../recipe/shared/recipe.mock";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL_RECIPE = 'http://10.0.1.229:8080/api/v1/recipes';

  constructor(private _http:HttpClient) { }

  getAllRecipie(): Observable<Recipe[]> {
    // return this._http.get(this.URL_RECIPE);
    return of(MOCK_RECIPES);
  }

  getRecipieById(id: number): Observable<Recipe> {
    return this._http.get(`${this.URL_RECIPE}/${id}`);
    // return of(MOCK_RECIPES);
  }
}
