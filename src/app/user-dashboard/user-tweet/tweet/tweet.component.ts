import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  tweet : any;
  comments : any = [];
  likes: any = [];
  liked : boolean;
  user : any;
  first_name : string;
  last_name : string;
  userId : string;
  tweetId : string;
  addCommentForm: FormGroup;
  addLikeForm: FormGroup;
  submitted = false;
  displayNoCommentsData : string;

  constructor(private authorizedService: AuthorizedService, private route : ActivatedRoute, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      comments: ['', Validators.required],
    });
    this.addLikeForm = this.fb.group({
      like: [''],
    });
    this.route.params
      .subscribe(
        (params: Params) => {
          this.tweetId = params['tweetId'];
          this.getTweetById(this.tweetId);
        }
    );
    this.liked = false;

  }

  private getTweetById(tweetId : string)
  {
    const userId = localStorage.getItem("userId")!;
    this.authorizedService.getTweetById(tweetId, userId ).subscribe(data=>
    {
        this.tweet = data;  
        console.log(this.tweet);
        this.authorizedService.getUserById(this.tweet.userId).subscribe(data=>
        {
            this.user = data;
            this.first_name = this.user.first_name;
            this.last_name = this.user.last_name;
        });  
        this.authorizedService.getTweetLikesById(tweetId).subscribe(data =>
        {
            this.likes = data;
            
            var isPresent = this.likes.some(function(el : any){ 
              return el.userId === userId
            });
            if(isPresent == true)
            {
              this.liked = true;
            }
            else{
              this.liked = false;
            }
            console.log(isPresent);
        });

        this.authorizedService.getTweetCommentsById(tweetId).subscribe(data=>
        {
            this.comments = data; 
            console.log(this.comments.length);
            if(this.comments.length > 0)
            {
              this.displayNoCommentsData = "true";
            }
            else{
              this.displayNoCommentsData = "false"
            }
        });                                                                                                                                                                                                                                                           
    });
  }

  toggle(action : string, tweetId : string, likeId? : string) {
    const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
    const userId = localStorage.getItem("userId") == null ? "" : localStorage.getItem("userId");
    const userLike = 
    {
      tweetId : tweetId,
      userId : userId,
      liked : action,
      likeId : likeId,
      loginId : loginId
    }
    
    console.log(userLike); 
    this.authorizedService.addLike(userLike).subscribe(data => 
    {
      console.log(data);
      this.getTweetById(tweetId);
    });


 }

  addComments(tweetId : string)
  {
    const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
    const userId = localStorage.getItem("userId") == null ? "" : localStorage.getItem("userId");

    this.submitted = true;
    console.log(this.addCommentForm.invalid);
    if (this.addCommentForm.invalid) {
        return;
    }

    const userComment = 
    {
      tweetId : tweetId,
      userId : userId,
      comment : this.addCommentForm.value.comments,
      loginId : loginId
    }
    
    this.authorizedService.addComment(userComment).subscribe(data =>
    {
      console.log(data);
      this.getTweetById(tweetId);
    });


  }

}
