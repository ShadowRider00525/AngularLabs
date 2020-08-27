import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email:string = '';
  username:string = '';
  birthday:string = '';
  age:number = 0;
  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.email = this.route.snapshot.params.email;
    this.username = this.route.snapshot.params.username;
    this.birthday = this.route.snapshot.params.birthday;
    this.age = this.route.snapshot.params.age;
  }
  
}