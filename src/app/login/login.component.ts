import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    login: '',
    password: ''
  });

  loginHandler () {

  }
}
