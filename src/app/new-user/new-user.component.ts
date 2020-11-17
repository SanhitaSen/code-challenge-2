import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  constructor(private userServ: UsersService) { }
  ngOnInit(): void {
  }
  userModel = new User('', 'NA','', null, null);
  onSubmit()
  {
     console.log(this.userModel);
     let submitted = document.getElementById('form-submitted');
     submitted.style.display = "block";
     
  }
    post() {
        console.log(this.userModel);
        this.userServ.createUser(this.userModel);        
    }
    cancel() {
        this.userModel = {firstName: '', lastName: 'NA', email: '',  age:null, _id: null }
    }

 }

