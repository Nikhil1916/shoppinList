import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('A test Recipe', 'Testng', 'https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg'),
  new Recipe('Another test Recipe', 'Testng', 'https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg')];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    // console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
