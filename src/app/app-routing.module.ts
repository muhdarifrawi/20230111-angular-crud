import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  {
    path:"create",
    component:CreateUserComponent
  },
  {
    path:"list",
    component:ListUserComponent
  },
  {
    path:"view",
    component:ViewUserComponent
  },
  {
    path:"edit",
    component:EditUserComponent
  },
  {
    path:"delete",
    component:DeleteUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
