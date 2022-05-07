import { Component, OnInit, Input } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { MyService } from 'src/app/shared/Services/Shared/MyService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  othersTweets : any = [];
  userInfo: any=[]; 
  userId : number;
  userName : string;

  constructor(private authorizedService:AuthorizedService, private route : ActivatedRoute, private myService : MyService) { }
 
  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.userName = params['userName'];
          this.getTweetsByUserName(this.userName);
        }
      );
  }
  
  private getTweetsByUserName(username : string)
  {
    this.authorizedService.searchUserTweet(this.userName).subscribe(data=>
      {
          console.log(this.userName);
          this.userInfo = data;
          console.log(data);                                                                                                                                                                                                                                                                
      });
      this.authorizedService.getTweetsByUserName(this.userName).subscribe(data=>
        {
            console.log(this.userName);
            this.othersTweets = data;
            console.log(data);                                                                                                                                                                                                                                                                
        });
  }


}
