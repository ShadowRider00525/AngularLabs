import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string='';
  age:number=0;
  birthday:string='';
  newuser:User;
  id:number = 0;

  constructor(private route:Router) { }

  ngOnInit(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.username = this.newuser.username;
      this.age = this.newuser.age;
      this.birthday = this.newuser.birthday
    }
    else{
      this.route.navigate(['/login']);
    }
  }

  updateItem(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.newuser.username = this.username;
      this.newuser.age = this.age;
      this.newuser.birthday = this.birthday;

      sessionStorage.setItem('currentUser',   JSON.stringify(this.newuser));
      this.route.navigate(['/account']);
    }
  }
}
