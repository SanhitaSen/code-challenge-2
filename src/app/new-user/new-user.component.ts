import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  enrollServ: any;

  constructor() { }
  submitted= false;
  ngOnInit(): void {
  }
  userModel = new User('');
   allUsers:string[] = [];
  onSubmit()
  {
     console.log(this.userModel);
     this.allUsers.push(this.userModel.name);
     console.log(this.allUsers);
     this.userModel.name = '';
     
  }
  @Output() childEvent = new EventEmitter();
  fireEvent()
  {
    this.childEvent.emit(this.allUsers);
  }

  }

