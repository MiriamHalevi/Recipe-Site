import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  origenalRecipes: Recipes[];
  RecipesArr: Recipes[];
  categories: Category[] = [];
  name: string = "";
  category: any = "";
  time: number = 0;
  constructor(public recipeService: RecipeService, public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(
      secc => {
        this.origenalRecipes = secc;
        this.RecipesArr = secc
      },
      error => { console.log(error) }
    );
    this.categoryService.getAllCategory().subscribe(
      secc => { this.categories = secc },
      error => { console.log(error) }
    )
  }
  isSameCategory(categoryCode): any {
    console.log(this.categories)
    if (this.categories.find(c => c.Code == categoryCode && c.Name.includes(this.category)) != undefined)
      return true;
    return false;
  }
  filter() {
    this.RecipesArr = this.origenalRecipes;
    if (this.name != "")
      this.RecipesArr = this.RecipesArr.filter(r => r.Name.includes(this.name));
    console.log(this.RecipesArr);
    if (this.category != "")
      this.RecipesArr = this.RecipesArr.filter(r => this.isSameCategory(r.CategoryCode));
    console.log(this.RecipesArr);
    if (this.time != 0)
      this.RecipesArr = this.RecipesArr.filter(r => r.PreparationTime == this.time);
    console.log(this.RecipesArr);

  }
  
}
