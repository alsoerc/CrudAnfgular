import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  user = new Employee();

  constructor(private router:Router, private _authS : AuthService) { }

  ngOnInit() {
  }

  login(){
    this._authS.logueado = true;
    this.router.navigate(['/employees'])
  }

}
