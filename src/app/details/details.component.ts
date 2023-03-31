import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idetails } from '../card-data';
import { CardDataService } from '../card-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
ids:any;
public details:Idetails[]=[];
public idss!: number;
// something:boolean=false;
// public Name:string='';
 public Id:any;
// public Email:string='';
// public Phone:string='';
// public Address:string='';
// public Website:string='';
  constructor(private _carddetails:CardDataService, private route: ActivatedRoute, private router:Router) {  
     this.ids=this.route.snapshot.paramMap.get('id');
    this.idss= +this.ids;}

  ngOnInit(): void {
  
    this._carddetails.getdetail()
    .subscribe(res =>
      {
     res.find((a:any)=>{
       if(a.id === this.idss){
       this.details=res;
        this.Id=a.id;

// this.something=true;
          // this.Email=a.email;
          // this.Name=a.name;
          // this.Phone=a.phone;
          // this.Website=a.website;
          // this.Address=a.address;
          // this.Id=a.id;
          // this._carddetails=a;
        } 
       
      });
    })

  
  }

}
