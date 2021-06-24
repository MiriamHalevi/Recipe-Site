import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
myRecipe:Recipes=this.recipeServies.myRecipe;
categoryDetails:Category;
componentArr:string[];
levelStars:any=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;



  constructor(private recipeServies :RecipeService,private categoryServise:CategoryService,private router:Router,private location:Location) {

  }

  ngOnInit(): void {
    console.log(this.myRecipe)
    this.componentArr=this.myRecipe.ComponentsList.split(',');
    console.log(this.componentArr)

    this.categoryServise.getCategoryByCode(this.myRecipe.CategoryCode).subscribe(
      secc=>{this.categoryDetails=secc;console.log(this.categoryDetails)
        this.fillDocument();
      },
      error=>{console.log(error)}
    );
    
  }
 fillDocument(){
  let levelP= document.querySelector("#level");
  let category= document.querySelector("#category");

  for (let index = 0; index < this.myRecipe.DifficultyLevel; index++) {
    levelP.innerHTML+=this.levelStars; 
  }
  category.innerHTML+=this.categoryDetails.IconNavigation +" "+this.categoryDetails.Name;
 }
 canEdit(){
  let corentUser = JSON.parse(sessionStorage.getItem("myUser"));
   if(this.myRecipe.OwnerCode==corentUser.Code)
   return true;
   return false;
 }
 edit(){
this.router.navigate(["edit"]);
 }
 goBack(){
this.location.back();
 }
}
