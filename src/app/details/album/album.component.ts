import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/card-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ialbum } from 'src/app/album';
import { Idetails } from 'src/app/card-data';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
public album:any;
ids:any;
public Name:string='';
public userName:string='';
  public idss!: number;

  constructor(private _carddetailalbum:CardDataService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ids=this.route.snapshot.paramMap.get('pass');
    this.idss= +this.ids;
    this._carddetailalbum.getdetailAlbum()
    .subscribe(res =>this.album=res);
    
    
    this._carddetailalbum.getdetail()
    .subscribe(res=>{
      res.find((a:any)=>{
if(a.id===this.idss){
  this.Name=a.name;
  this.userName=a.username;
}
      })
    })
      //{
     // res.find((a:any)=>
      // {
        // if(a.id === this.ids){
        // this.album=a.title;
         
 
 // this.something=true;
           // this.Email=a.email;
           // this.Name=a.name;
           // this.Phone=a.phone;
           // this.Website=a.website;
           // this.Address=a.address;
           // this.Id=a.id;
           // this._carddetails=a;
    //      } 
        
    //    });
    //  })
  }

  onclick(){

  }

}
