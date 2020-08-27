import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email:string = '';
  pass:string = '';
  errormsg = '';
  newuser:User;
  userid='';
  constructor(private router:Router, private route:ActivatedRoute) {}


  ngOnInit() {
    this.userid = this.route.snapshot.params.id;
  }
  
  itemClicked(){
    //data.preventDefault();
    //(this.email, this.pass)(
    data =>{
      if(data.valid == true){
        this.newuser = new User(data.username,data.birthday,data.age,data.email)
        sessionStorage.setItem('currentUser',JSON.stringify(this.newuser));
        this.router.navigate(['/account']);
      }
    else{
      this.errormsg = "Incorrect Credentials"
    }
    error =>{
      this.errormsg = "Incorrect Credentials"
    }
  }
}
logOut(){
  sessionStorage.clear();
  this.router.navigate(['/login']);

}
}
