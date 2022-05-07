import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})

export class TweetComponent implements OnInit {

  Tweet: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private router: Router, private authorizedService : AuthorizedService) { }

  ngOnInit(): void {
    this.Tweet = this.fb.group({
      tweetTag: [ "", [ Validators.maxLength(50)]],
      tweetDescription: ["", [Validators.required, Validators.maxLength(144)]]
    });
  }

  OnSubmit()
  {
      this.submitted = true;
      if (this.Tweet.invalid) {
          return;
      }

      const userId = localStorage.getItem("userId") == null ? "" : localStorage.getItem("userId");
      const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
 
      const tweet = 
      {
          userId : userId,
          tweetTag : this.Tweet.value.tweetTag,
          tweetDescription : this.Tweet.value.tweetDescription,
          username : loginId
      }


      this.authorizedService.createTweet(tweet)
      .subscribe(data =>
      {
          if(data == "Tweet created successfully")
          {
            console.log(data)

            this.router.navigate(['user-dashboard/my-tweets']);
          }
          else{
            this.router.navigate(['/user-dashboard']);
            console.log("error");
          }
      });
      this.router.navigate(['/user-dashboard']);


  }


}
