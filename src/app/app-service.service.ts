import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  userInfo : any
  allPosts : any

  getRequest(url : string){
    console.log("hello");
    return this.http.get(url)
  }
}
