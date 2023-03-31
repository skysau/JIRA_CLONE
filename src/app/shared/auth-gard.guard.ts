import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {
  user!:boolean
  constructor(private authservice:AuthServiceService,private router:Router){}
  canActivate()
    {
      this.user=this.authservice.getdata();
      if(this.user){
        return true;
      }
      else{
        return false;
        this.router.navigate(['/log-in'])
      }

      //logic
   // return true;
  }
  
}
