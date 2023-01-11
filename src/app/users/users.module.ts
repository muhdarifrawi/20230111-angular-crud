import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUserComponent } from './list-user/list-user.component';

// material ui api
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class UsersModule { }
