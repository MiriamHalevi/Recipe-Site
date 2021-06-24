import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Category } from 'src/models/Category';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import Swal from 'sweetalert2';
import { routes } from '../app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  images: string[];
  categories: Category[];
  Components: string[] = [""];
  methods: string[] = [""];
  addedRecipe: Recipes = new Recipes(null, null, null, null, null, null, null, null, null, null, null, null);
  constructor(public recipeService: RecipeService, public categoryService: CategoryService, public router: Router) {
  }

  ngOnInit(): void {
    this.recipeService.getImgSrc().subscribe(
      secc => { this.images = secc },
      error => { console.log(error) }
    );
    this.categoryService.getAllCategory().subscribe(
      secc => { this.categories = secc },
      error => { console.log(error) }
    )
  }
  trakbiy(index: number, obj: object): any {
    return index;
  }
  check(e) {
    if (e.target.id != this.Components.length - 1) {
      if (e.target.value == "") {
        this.Components.splice(e.target.id, 1);

      }
      else {

        if (!this.Components.some(p => { p == e.target.value }))
          this.Components[+e.target.id] = e.target.value;


      }
    }
  }

  addInput(e) {

    if (e.target.id == this.Components.length - 1)
      this.Components.push("");

  }

  checkMethod(e) {

    if (e.target.id != this.methods.length - 1) {
      if (e.target.value == "") {
        this.methods.splice(e.target.id, 1);

      }
      else {
        console.log(this.Components)
        if (!this.methods.some(p => { p == e.target.value }))
          this.methods[+e.target.id] = e.target.value;

      }
    }
  }

  addInputMethod(e) {
    if (e.target.id == this.methods.length - 1)
      this.methods.push("");

  }
  sendForm() {
    this.addedRecipe.OwnerCode = JSON.parse(sessionStorage.getItem("myUser")).Code;
    this.addedRecipe.DateAdded = new Date();
    this.Components = this.Components.filter(x => x != "");
    this.addedRecipe.ComponentsList = this.Components.join(',');
    this.addedRecipe.PreparationMethod = this.methods.filter(x => x != "");
    this.recipeService.addRecipe(this.addedRecipe).subscribe(
      secc => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your recipe has been saved',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['allRecipes'])
      },
      error => { console.log(error) }
    );
  }
}
