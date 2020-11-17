import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public allUsers : User[];
  // constructor(private _userAPI: UsersService){}
  // ngOnInit(): void {
  //   this._userAPI.getUser().subscribe(data => {
  //     console.log(data);
  //     this.allUsers = data;
  //   })
  // }
}
