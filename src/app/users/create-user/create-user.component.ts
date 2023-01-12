import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  
  // reactive form
  addUserForm:FormGroup=new FormGroup({})

  constructor(private formBuilder:FormBuilder, private userService:UserService,
    private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      "username":new FormControl(""),
      "email":new FormControl(""),
      "phone":new FormControl(""),
    })
  }

  createUser(){
    console.log("createUser triggered")
    console.log(this.addUserForm.value)
    this.userService.createUser(this.addUserForm.value).subscribe(data=>{
      console.log("sent data: ",data)
      console.log("user added successfully")
      this.openSnackBar("User added successfully!", "Dismiss")
    })
  }

  // function to trigger snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
