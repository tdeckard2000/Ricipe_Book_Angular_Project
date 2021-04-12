import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './shoppingList/list/list.component';
import { ListEditComponent } from './shoppingList/list-edit/list-edit.component';
import { IngredientsComponent } from './shoppingList/ingredients/ingredients.component';
import {RecipeComponent } from './recipeBook/recipe/recipe.component';
import {RecipeDetailComponent } from './recipeBook/recipe-detail/recipe-detail.component';
import {RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import {RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ListEditComponent,
    IngredientsComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
