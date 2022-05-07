import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers : any = [];
  constructor(private authorizedService : AuthorizedService) { }
 

  ngOnInit(): void {
    this.getAllUsers();
  }

  
  getAllUsers()
  {
      this.authorizedService.getAllUsers().subscribe(data =>
      {
          this.allUsers = data;
          console.log(this.allUsers);
      });
  }
  
}
