import { compileInjector, rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { User } from 'src/models/User';
import Swal from 'sweetalert2';
import { ConfirmValidation } from '../ConfirmValidation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginName:string="";
  registerForm:FormGroup;
  repitedName:boolean=false;
  constructor(public active :ActivatedRoute,public userService:UserService,public router:Router) {
active.params.subscribe(param=>{this.loginName=param['name']});

   }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      "name":new FormControl(this.loginName,Validators.required),
      "address": new FormControl("",Validators.required),
      "mail": new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9.]{6,}@[a-zA-Z]{3,7}.[a-z]{3}")])),
    "password":new FormControl("",[Validators.required,Validators.maxLength(8)]),
"confirmPassword":new FormControl("",Validators.required)
    },ConfirmValidation.confirm("password","confirmPassword"));
    
  }

send(){
  const user={...this.registerForm.value};
  user["code"]=-1;
this.userService.addUser(user).subscribe(
secc =>{
  console.log(secc);this.repitedName=false;
  this.getUser(secc);
this.Pop()},
error=>{console.log(error);this.repitedName=true}
)
}
Pop(){
  Swal.fire({
      title:'thank you',
      text:'you have seccesfully registered ',
      icon:'success',
      confirmButtonText: 'to see the recipes'
  }).then(result=>{
    if(result.isConfirmed==true)
    this.router.navigate(["allRecipes"]);

  }) 
}
getUser(user){
  sessionStorage.setItem("myUser",JSON.stringify(user));
}
}

