import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import Swal from 'sweetalert2';
import { routes } from '../app-routing.module';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editedRecipe: Recipes = this.recipeService.myRecipe;
  images: any = [];
  categories: any = [];
  Components: string[] = this.editedRecipe.ComponentsList.split(",");
  methods = this.editedRecipe.PreparationMethod;
  constructor(private recipeService: RecipeService, private categoryService: CategoryService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    //take care of variables
    this.methods.push("");
    this.Components.push("");
    this.recipeService.getImgSrc().subscribe(
      secc => { this.images = secc },
      error => { console.log(error) }
    );
    this.categoryService.getAllCategory().subscribe(
      secc => { this.categories = secc },
      error => { console.log(error) }
    )
  }
  //lists care
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
    this.editedRecipe.DateAdded = new Date();
    this.Components = this.Components.filter(x => x != "");
    this.editedRecipe.ComponentsList = this.Components.join(',');
    this.editedRecipe.PreparationMethod = this.methods.filter(x => x != "");
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {

      if (result.isConfirmed) {
        this.recipeService.changeRecipe(this.editedRecipe).subscribe(
          secc => {
            this.recipeService.myRecipe = secc;
            Swal.fire('Saved!', '', 'success')
            this.router.navigate(['allRecipes'])
          },
          error => { console.log(error) }
        );
      } else if (result.isDenied) {
        this.location.back();

      }
    })


  }
}

