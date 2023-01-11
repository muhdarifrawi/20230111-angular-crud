import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  {
    path:"users",
    children:[
      {
        path:"",
        component:ListUserComponent
      },
      {
        path:"list",
        component:ListUserComponent
      },
      {
        path:"view/:id",
        component:ViewUserComponent
      },
      {
        path:"edit/:id",
        component:EditUserComponent
      },
      {
        path:"delete/:id",
        component:DeleteUserComponent
      },
      {
        path:"create",
        component:CreateUserComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
