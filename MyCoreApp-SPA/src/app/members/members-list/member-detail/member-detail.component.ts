import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  user : User; /* declared a variable of type User(model) */
  constructor(private userServie : UserService , private alertify: AlertifyService, private routes: ActivatedRoute) { }  

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    /* + is to convert string to INT, new stuf !! kool, also ID will comer from router Link, whic need to be defined in Children Routes in routes.ts AND in [routerLink]="['/members/', user.id]" */
    return this.userServie.getUser(+this.routes.snapshot.params['id']) 
    .subscribe((user : User)=>{
      this.user = user;
    },error => {
      this.alertify.error(error);
    })
  }

}
