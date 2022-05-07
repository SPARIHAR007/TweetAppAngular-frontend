import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from '../../user-search/user/user.component';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  addForm: FormGroup;
  myTweets : any = [];
  userId : number;
  displayNoData : string;
  submitted = false;
  
  user : any;
  first_name : string;
  last_name : string;
  fullName :any= localStorage.getItem("fullName");;
  
  constructor(private authorizedService:AuthorizedService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      comments: ['', Validators.required],
    });

    const username = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
     
    if(username != null)
    {
      
      this.getTweetsByUserName(username);
    }

  }

  private getTweetsByUserName(username : string)
  { 
    this.authorizedService.getTweetsByUserName(username).subscribe(data=>
    {
    
      this.myTweets = data;
    
      if( this.myTweets.length  > 0)
      {
        this.displayNoData = "true";
        this.authorizedService.getUserByUserName(username).subscribe(data =>
        {
          this.user = data;
         
        });
      }
      else{
        this.displayNoData = "false";
      }
                                                                                                                                                                                                                                                                  
    });
  }

  
  addComments(tweetId : string)
  {
    const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
    const userId = localStorage.getItem("userId") == null ? "" : localStorage.getItem("userId");

    this.submitted = true;
    console.log(this.addForm.invalid);
    if (this.addForm.invalid) {
        return;
    }

    const userComment = 
    {
      tweetId : tweetId,
      userId : userId,
      comment : this.addForm.value.comments,
      loginId : loginId
    }
    
    this.authorizedService.addComment(userComment).subscribe(data =>
    {
      console.log(data);
     
    });
  }


}
