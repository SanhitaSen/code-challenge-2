import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allUsers : User[];
  constructor(private _userAPI: UsersService){}
  ngOnInit(): void {
    this._userAPI.getUser().subscribe(data => {
      console.log(data);
      console.log(data[0]._id)
      this.allUsers = data;
    })
  }

}
