import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
islogin!:boolean
userid!:number
user:string=''
  constructor() { }
  setdata(data:boolean){
this.islogin=data;

  }
  getdata(){
    return this.islogin;
  }
  setuserid(ss:number){
    this.userid=ss;
  }
  getuserid(){
    return this.userid;
  }
  setuser(ss:string){
    this.user=ss;
  }
  getuser(){
    return this.user;
  }
}
