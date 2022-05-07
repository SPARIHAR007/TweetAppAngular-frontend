import { Component, OnInit, Input } from '@angular/core';
import { AuthorizedService } from '../shared/Services/Authorized/authorized.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userName : string;
  lastTweet : any;
  
  UserName : String = "Welcome, ";

  constructor(private authorizedService : AuthorizedService) { }

  ngOnInit(): void {
    this.getLatestTweet();
    
    this.getWelcomeUserName();
  }
  
  getWelcomeUserName()
  {
    const fullName = localStorage.getItem("fullName") == null ? "" : localStorage.getItem("fullName");
    console.log(fullName);
    if(fullName != null)
    {
      this.UserName += fullName.toLocaleUpperCase();
    }
  } 

  getLastUpdatedTweet()
  {
    this.getLatestTweet();
  }

  getLatestTweet()
  {
    this.authorizedService.getAllTweets().subscribe(data =>
      {
        this.lastTweet = data;
      })
  }

}
