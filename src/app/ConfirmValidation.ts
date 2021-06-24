import { FormGroup } from '@angular/forms';

export class ConfirmValidation{
  
    public static confirm(controlerName1:string,controlerName2:string) {

        return (form:FormGroup)=>{
let controler1=form.controls[controlerName1].value;
let controler2=form.controls[controlerName2].value;
if(controler1==controler2)
return null;
return {'confirmationError':{massege :"the passwords must be the same!"}}

        } 
    }
}