import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit,OnChanges {
  constructor() { }
  selectedRecipe:any;
  ngOnInit(): void {
    console.log(this.selectedRecipe);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedRecipe);
  }
  recipeSelected(event:any){
    // console.log(event);
    this.selectedRecipe=event;
  }
  

}
