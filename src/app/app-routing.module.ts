import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add_new', component: NewUserComponent},
  {path: 'delete', component: DeleteUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
