import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  userId:any
  userDetails:any
  editForm:FormGroup = new FormGroup({})
  load:boolean = false

  constructor(private activatedRoute:ActivatedRoute, 
    private userService:UserService, private formBuilder:FormBuilder,
    private _snackBar: MatSnackBar,private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data["id"]
    })

    if(this.userId!==""){
      this.userService.viewUser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails=data
        console.log(data)

        this.editForm=this.formBuilder.group({
          "username":new FormControl(this.userDetails.username),
          "email":new FormControl(this.userDetails.email),
          "phone":new FormControl(this.userDetails.phone),
        })

        this.load = true
      })
    }

    
  }

  updateUser(){
    console.log("Editing user")
    console.log(this.editForm.value)
    this.userService.updateUser(this.userId, this.editForm.value).subscribe(
      data =>{
        this.openSnackBar("User edited successfully","Dismiss")
        this.router.navigate(['/users']);
      })
  }

  // function to trigger snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
