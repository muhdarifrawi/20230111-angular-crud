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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUserComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule
  ],
  providers:[
    {
      // make it such that the snackbar closes in 3seconds
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue:{duration:3000}
    }
  ]
})
export class UsersModule { }
