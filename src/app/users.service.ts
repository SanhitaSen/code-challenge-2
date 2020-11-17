import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url : string = 'http://localhost:8000/users';
  //  private _url : string = '../assets/data/users.json';
  constructor(private http: HttpClient) { }
  usermodel:string;
  getUser() : Observable<User[]> {
  //  console.log(this.http.get(this._url));
    return this.http.get<User[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error)
  {
    return throwError(error.message || "Server Error!");
  }

  createUser(newUser: User)
  {
    this.http.post(this._url, newUser).subscribe(res =>{});
  }

  deleteUser(id: number)
  {
    const endPoint = this._url +'/'+ id;
    console.log(endPoint);
    return this.http.delete(endPoint);
  }
}
