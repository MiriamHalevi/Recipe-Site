import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(public http :HttpClient) { }
  myRecipe:Recipes;
  getAllRecipes():Observable<any>{
    return this.http.get<Recipes[]>("https://localhost:44358/api/recipes/allRecipes");
     
  }
  getImgSrc():Observable<any>{
    return this.http.get<string[]>("https://localhost:44358/api/recipes/images");
     
  }
  addRecipe(recipe){
    return this.http.post<any>("https://localhost:44358/api/recipes/add",recipe);

  }
  changeRecipe(recipe){
    return this.http.post<any>("https://localhost:44358/api/recipes/change",recipe);

  }
}
