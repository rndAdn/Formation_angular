import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {SharedModule} from "../../shared/shared.module";
import {StrToArrayPipe} from "../../shared/str-to-array.pipe";
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import {RouterModule} from "@angular/router";
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [ RecipeListComponent,
    RecipeDetailComponent,StrToArrayPipe, RecipeOverviewComponent, AddRecipeComponent, RecipeUpdateComponent
    ]
})
export class RecipeRoutedModule { }
