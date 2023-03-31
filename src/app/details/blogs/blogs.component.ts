import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDataService } from 'src/app/card-data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public blog:any;
  ids:any;
  public Name:string='';
  public userName:string='';
    public idss!: number;
  constructor(private _carddetailalbum:CardDataService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ids=this.route.snapshot.paramMap.get('pass');
    this.idss= +this.ids;
    this._carddetailalbum.getdetailBlog()
    .subscribe(res =>this.blog=res);
    
    
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

}
