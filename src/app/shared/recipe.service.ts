import { Injectable } from '@angular/core';
import {Recipe} from "./model/recipe.model";
import {Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MOCK_RECIPES} from "../recipe/shared/recipe.mock";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL_RECIPE = 'http://10.0.1.229:8080/api/v1/recipes';

  constructor(private _http:HttpClient) { }

  getAllRecipie(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>(this.URL_RECIPE);
    // return of(MOCK_RECIPES);
  }

  getRecipieById(id: string): Observable<Recipe> {
    return this._http.get<Recipe>(`${this.URL_RECIPE}/${id}`);
    // return of(MOCK_RECIPES);
  }


  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this._http.post<Recipe>(`${this.URL_RECIPE}`, recipe);
  }


  deleteRecipe(recipe: Recipe): Observable<Recipe>{

    // const params = new HttpHeaders({fromObject: recipe});
    console.log("recipe to delete ", recipe);
    return this._http.delete<Recipe>(`${this.URL_RECIPE}/${recipe.id}`);
  }


  updateRecipe(recipe: Recipe): Observable<Recipe>{

    // const params = new HttpHeaders({fromObject: recipe});
    console.log("recipe to update ", recipe);
    return this._http.patch<Recipe>(this.URL_RECIPE, recipe);
  }

}
