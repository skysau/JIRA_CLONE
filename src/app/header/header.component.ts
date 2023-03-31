import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ids!: number;
  name:string=''

  constructor(private myprofile:AuthServiceService, private router:Router){
    this.name=this.myprofile.getuser();
    this.ids=this.myprofile.getuserid();
      }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
   
  }
      OnInit(){
     
      }
      onmyprofile(){
        
        this.router.navigate(['/details',this.ids]);
      }

}
