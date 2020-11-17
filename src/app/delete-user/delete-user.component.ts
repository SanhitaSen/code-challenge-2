import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  
  public allUsers : User[];
  public message: Object;
  constructor(private _userAPI: UsersService){}
  ngOnInit(): void {
    this._userAPI.getUser().subscribe(data => {
      console.log(data);
      console.log(data[0]._id)
      this.allUsers = data;
    })
  }
  deleteUser(id)
  {    
    this._userAPI.deleteUser(id).subscribe(data => {
      console.log(data);
      this.message = data;
    });
    this._userAPI.getUser().subscribe(data => {
      this.allUsers = data;
    });
  }

}
