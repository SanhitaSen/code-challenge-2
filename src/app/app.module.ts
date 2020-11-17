import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common//http';
import {UsersService} from './users.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
