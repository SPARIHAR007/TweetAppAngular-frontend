import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  allTweets : any = [];
  displayNoData : string;
  first_name : string;
  last_name : string;
  user:any=[];

  constructor(private authorizedService : AuthorizedService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getAllTweets();
      // this.addForm = this.fb.group({
      //     comments: ['', Validators.required],
      // });
    }

  getAllTweets()
  {
      this.authorizedService.getAllTweets().subscribe(data =>
      {
        this.allTweets = data;
    /*    for(var index of this.allTweets){
          this.authorizedService.getUserById(index.id).subscribe(data1 =>
            {
              console.log(data1);
            }
            
            )
          index["userName"]='blaaaa';
        }
        */
        if( this.allTweets.length  > 0)
        {
          this.displayNoData = "true";
        }
        else{
          this.displayNoData = "false";
        }
      });
  }
 

  // addComments(tweetId : string)
  // {
  //   const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
  //   const userId = localStorage.getItem("userId") == null ? "" : localStorage.getItem("userId");

  //   this.submitted = true;
  //   console.log(this.addForm.invalid);
  //   if (this.addForm.invalid) {
  //       return;
  //   }

  //   const userComment = 
  //   {
  //     tweetId : tweetId,
  //     userId : userId,
  //     comment : this.addForm.value.comments,
  //     loginId : loginId
  //   }
    
  //   this.authorizedService.addComment(userComment).subscribe(data =>
  //   {
  //     console.log(data);
  //     this.getAllTweets();
  //   });


  // }

  
}
