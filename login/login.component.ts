import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = "";
  userName: string = "";
  constructor(private router: Router) { }

  onClick() {
    this.router.navigateByUrl('/');
  }
  ngOnInit() {
  }

}
