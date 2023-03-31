import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idetails } from './card-data';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private  _url="https://jsonplaceholder.typicode.com/users";
  private  _urlA="https://jsonplaceholder.typicode.com/albums";
  private  _urlB="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getdetail(): Observable<Idetails[]>{
    return this.http.get<Idetails[]>(this._url);
  }
  getdetailAlbum(): Observable<any>{
    return this.http.get<any>(this._urlA);
  }
  
  getdetailBlog(): Observable<any>{
    return this.http.get<any>(this._urlB);
  }
  
  
}
