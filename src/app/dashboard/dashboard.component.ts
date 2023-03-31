import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDataService } from '../card-data.service';
import { Idetails } from '../card-data';
import { FormGroup , FormBuilder} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public todo:Idetails[]=[];
  public progress:Idetails[]=[];
  public detail:Idetails[]=[];
  task:any=[]
  ids!: number;
  searchTerm: string='';
  searchKey:string ="";
  constructor(private _carddetails:CardDataService, private router:Router) {
    
   }

  ngOnInit() {
    this._carddetails.getdetail()
    .subscribe(data => {
      this.detail = data
      this.detail.splice(1,data.length)
    });
    this._carddetails.getdetail()
    .subscribe(data => {

      this.todo = data
      this.todo.splice(3,data.length)
    });
    this._carddetails.getdetail()
    .subscribe(data => {

      this.progress = data
      this.progress.splice(2,data.length)
    });
  // this._carddetails.getdetail().forEach(element => {
  //   this.details=element;
  // });
  }
  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchKey=this.searchTerm;
   // this._carddetails.getdetail().search.next(this.searchTerm);
  }
 
  onSelect(datas: Idetails){
    
  }
  
  
  AddTask(data:string,i=0){
 if(data==='todo'){
   const length=this.todo.length
  this._carddetails.getdetail()
  .subscribe(data => {
    this.todo = data
    this.todo.splice(length+1,data.length)
  });

 }else if(data==='progress'){
  const length=this.progress.length
     this._carddetails.getdetail()
  .subscribe(data => {

    this.progress = data
    this.progress.splice(length+1,data.length)
  });
}else{
  const length=this.task[i].length
     this._carddetails.getdetail()
  .subscribe(data => {
    this.task[i] = data
    this.task[i].splice(length+1,data.length)
  });
}
  }
  deleteTask(data:string,i=0){
    if(data==='todo'){
      const length=this.todo.length
     this._carddetails.getdetail()
     .subscribe(data => {
       this.todo = data
       this.todo.splice(length-1,data.length)
     });
   
    }else if(data==='progress'){
     const length=this.progress.length
        this._carddetails.getdetail()
     .subscribe(data => {
   
       this.progress = data
       this.progress.splice(length-1,data.length)
     });
   }else{
     const length=this.task[i].length
        this._carddetails.getdetail()
     .subscribe(data => {
       this.task[i] = data
       this.task[i].splice(length-1,data.length)
     });
   }
     }

     addNewTask(){
      this.task.push(this.detail)
     }
     deleteTaskColum(details:any,i:any){
     this.task.splice(i,1);
     }
}
