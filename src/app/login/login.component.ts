import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ HttpClientModule ]
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    console.log(this.user);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
