import { Component } from '@angular/core';
import { Recipes } from 'src/models/Recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myRecipe:Recipes=null;//del
  title = 'RecipesProjectScss';
  logout() {
    sessionStorage.removeItem("myUser");
  }
}
