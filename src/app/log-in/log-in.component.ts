import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthGardGuard } from '../shared/auth-gard.guard';
import { AuthServiceService } from '../shared/auth-service.service';
import { CardDataService } from '../card-data.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginform!:FormGroup
  @Output() U_Nam:EventEmitter<string> = new EventEmitter();
  public U_name!:number;
  public name:string=''
  
  constructor(private formBuilder:FormBuilder, 
    private Users:CardDataService,
    private Router:Router,
     private _auth:AuthGardGuard,
     private Authservice:AuthServiceService) { }

  ngOnInit(): void {
    
    this.loginform= this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  login(){
this.Users.getdetail()
.subscribe(res=>{
  const user = res.find((a:any)=>{
    if(a.email=== this.loginform.value.username && this.loginform.value.password ==="pass@123"){
     this.U_name=a.id;
     this.name=a.name;
     this.Authservice.setuserid(this.U_name);
     this.Authservice.setuser(this.name);
    }
    return a.email=== this.loginform.value.username && this.loginform.value.password ==="pass@123";
  });

  if(user){
    this.Authservice.setdata(true);
    alert('login sucess!!! Wellcome,'+ this.name);
   
    this.loginform.reset();
    
    this.Router.navigate(['dashboard']);
    //this.Router.navigate(['dashboard']);
   // this.U_Nam.emit(this.U_name);
  }
  else{
    alert('invalid user');
  }
  
})
  }

}
