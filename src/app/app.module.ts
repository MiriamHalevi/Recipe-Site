import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { OneRecipeDetailsComponent } from './one-recipe-details/one-recipe-details.component';
import { LoginComponent } from './login/login.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HoursPipe } from './hours.pipe';
import { EditComponent } from './edit/edit.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OneRecipeDetailsComponent,
    LoginComponent,
    AllRecipesComponent,
    RecipeDetailsComponent,
    HoursPipe,
    EditComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)Location
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
