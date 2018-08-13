import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from "./recipe/routed/recipe-list/recipe-list.component";
import {RecipeOverviewComponent} from "./recipe/routed/recipe-overview/recipe-overview.component";
import {AddRecipeComponent} from "./recipe/routed/add-recipe/add-recipe.component";
import {RecipeUpdateComponent} from "./recipe/routed/recipe-update/recipe-update.component";


const routes: Routes = [

  {
    path: 'recipe/add',
    component: AddRecipeComponent
  },
  {
    path: 'recipe/update/:id',
    component: RecipeUpdateComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeOverviewComponent
  },
  {
    path:'recipe',
    component: RecipeListComponent
  },
  {
    path: '**',
    redirectTo: 'recipe'
  }
];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {


}
