import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  
  // reactive form
  addUserForm:FormGroup=new FormGroup({})

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.addUserForm=this.formBuilder.group({
      "username":new FormControl(""),
      "email":new FormControl(""),
      "phone":new FormControl(""),
    })
  }

  createUser(){
    console.log("createUser triggered")
    console.log(this.addUserForm.value)
  }
}
