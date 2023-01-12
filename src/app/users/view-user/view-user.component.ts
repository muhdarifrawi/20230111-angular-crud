import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute){}

  userId:any
  userDetails:any

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
        console.log(data["id"])
  
        this.userId = data["id"]
      }
    )

    this.userService.viewUser(this.userId).subscribe((data)=>{
        console.log(data)
        this.userDetails = data
      }
    )
  }
}
