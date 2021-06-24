import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-one-recipe-details',
  templateUrl: './one-recipe-details.component.html',
  styleUrls: ['./one-recipe-details.component.scss']
})
export class OneRecipeDetailsComponent implements OnInit {
  @Input()
  myRecipe;

  constructor(public router: Router, private recipeServies: RecipeService) { }

  ngOnInit(): void {
  }
  showDetails() {
    this.recipeServies.myRecipe = this.myRecipe;
    this.router.navigate(['recipeDetails']);
  }
}
