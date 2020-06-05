import { Component, OnInit,OnChanges,
  AfterContentInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, AfterContentInit{
  

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _router: Router) {

  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(){
    console.log('');
  }

  ngAfterContentInit(){

  }

  createForm(){
    this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
    });
  }

  onSubmit(loginForm){
    console.log('onSubmit: ' + loginForm.username.value);
    this._router.navigate(['/home'], loginForm.password.value);
  }

  close(){
    
  }

}
