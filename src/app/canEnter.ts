import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
@Injectable({ providedIn: "root" })
export class CanEnter implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if (null!=sessionStorage.getItem("myUser"))
            return true;
       
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'השימוש מותנה ברישום מראש!',
               
              })
            return false;
    }

}