import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private route:Router, private appService:AppServiceService) { }

  email: any;
  getUsersURL : string = "https://jsonplaceholder.typicode.com/users"
  userData : any

  ngOnInit(): void {
    this.appService.getRequest(this.getUsersURL).subscribe(data => this.userData = data)
  }

  tempButton() {
    this.userData.forEach((element: any) => {
      if (element.email == this.email) {
        this.appService.userInfo = element
        this.route.navigate(['content-component'])
      }
    });
    console.log("userData", this.userData);
    
  }
}
