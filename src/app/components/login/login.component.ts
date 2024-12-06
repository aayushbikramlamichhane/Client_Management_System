import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  };
  router = inject(Router);
  onLogin(){
    if(this.loginObj.email == 'admin@gmail.com' && this.loginObj.password == 123456){
      this.router.navigateByUrl('/client');
      localStorage.setItem('employee',this.loginObj.email)
    }else{
      alert("Wrong Credentials");
    }
  }
}

