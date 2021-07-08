import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(private appService:AppServiceService) { }

  userPosts : any = []
  otherPosts : any = []

  ngOnInit(): void {
    console.log("this.appService.usersInfo", this.appService.userInfo);
    console.log("this.appService.allPosts", this.appService.allPosts);
    this.appService.allPosts
  }

  
}
