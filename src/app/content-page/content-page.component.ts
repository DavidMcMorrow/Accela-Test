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
  allPosts : any = []

  ngOnInit(): void {
    console.log("this.appService.usersInfo", this.appService.userInfo);
    this.allPosts = this.appService.allPosts
    console.log("this.appService.allPosts", this.appService.allPosts);
    this.seperatingPosts(this.appService.userInfo.id)
    console.log("this.userPost", this.userPosts);
    console.log("this.otherPosts", this.otherPosts)
  }

  seperatingPosts(userID : any){
    for (let index = 0; index < this.allPosts.length; index++) {
      const element = this.allPosts[index];
      if (element.userId == userID) {
        this.userPosts.push(element)
      }
      else{
        this.otherPosts.push(element)
      }
    }
  }
  
}
