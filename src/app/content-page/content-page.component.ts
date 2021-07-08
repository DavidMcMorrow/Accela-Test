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
  allUserInfo : any = []
  personalPostBoolean : boolean = true
  

  ngOnInit(): void {
    console.log("this.appService.usersInfo", this.appService.userInfo);
    this.allPosts = this.appService.allPosts
    this.allUserInfo = this.appService.allUsersInfo
    console.log("this.appService.allPosts", this.appService.allPosts);
    this.seperatingPosts(this.appService.userInfo.id)
    console.log("this.userPost", this.userPosts);
    console.log("this.otherPosts", this.otherPosts)
    this.personalPostBoolean = true
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

  displayingPosts(type : any){
    if (type == "User") {
      this.personalPostBoolean = true
    } else{
      this.personalPostBoolean = false
    }
    
  }
  
}
