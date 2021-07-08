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
  addingNewPostBoolean : boolean = false
  title : any
  body : any
  

  ngOnInit(): void {
    
    this.allPosts = this.appService.allPosts
    this.allUserInfo = this.appService.allUsersInfo
    
    this.seperatingPosts(this.appService.userInfo.id)
   
    this.personalPostBoolean = true
    
    
  }

  seperatingPosts(userID : any){
    this.userPosts = []
    this.otherPosts = []
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

  addingNewPost(){
    this.addingNewPostBoolean = true
  }

  cancel(){
    this.addingNewPostBoolean = false
    this.title = ""
    this.body = ""
  }

  addNewPost(){
    let newUserID = this.appService.userInfo.id
    let newTitle = this.title
    let newBody = this.body
    let newPostID = this.appService.allPosts[this.appService.allPosts.length - 1].id + 1

    let object = {
      userId: newUserID,
      id: newPostID,
      title: newTitle,
      body: newBody,
    }
    
    this.allPosts.push(object)
    
    this.seperatingPosts(this.appService.userInfo.id)
    this.cancel()
  }
}
