import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  userInfo : any
  allPosts : any
  allUsersInfo : any

  getRequest(url : string){
  
    return this.http.get(url)
  }
}
