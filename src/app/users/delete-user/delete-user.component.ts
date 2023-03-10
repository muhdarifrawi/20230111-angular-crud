import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId:string = ""

  constructor(private activatedRoute:ActivatedRoute, 
    private userService:UserService, private _snackBar: MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.userId=data["id"]
      })

      if(this.userId){
        this.userService.deleteUser(this.userId).subscribe(data=>{
          console.log("user deleted")
          this.openSnackBar("User deleted successfully!", "Dismiss")
          this.router.navigate(['/users']);
        })
      }
    
  }

  // function to trigger snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
