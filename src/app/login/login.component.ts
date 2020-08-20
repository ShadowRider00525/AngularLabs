import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var users = [{'email': 'bill@com.au', 'pass': '321'}, 
    {'email': 'timmy@com.au', 'pass': 'panda'},
    {'email': 'steve@com.au', 'pass': '123'}];

    for(let i = 0; i < users.length; i++){
      if(users[i].email == users[i].email && users[i].pass == users[i].pass){
        console.log(users[i]);

      }
    }
  }
}
