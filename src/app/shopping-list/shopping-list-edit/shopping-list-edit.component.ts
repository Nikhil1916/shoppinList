import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:any;
  @ViewChild('amountInput')amountInput :any;
  @Output() ingredientsEmitter=new EventEmitter<Ingredients>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    let data={
      name:this.nameInput.nativeElement.value,
      amount:this.amountInput.nativeElement.value
    }
    this.ingredientsEmitter.emit(data);
  }

}
