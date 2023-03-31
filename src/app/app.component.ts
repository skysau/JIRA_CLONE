import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './shared/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string='Saurabh..'
  title = 'project-final';
 public ids!:number
 
 
  constructor(private myprofile:AuthServiceService, private router:Router){
this.name=this.myprofile.getuser();
  }
  OnInit(){

  }
  onmyprofile(){
    this.ids=this.myprofile.getuserid();
    //this.router.navigate(['/details',this.ids]);
  }
  greet(event:any){
    alert('hii')
 this.name=event;
  }
}
