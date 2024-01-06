import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(form: NgForm) {
      this.authService.login(form.value).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        },
        err => {
          console.error('Error', err)
        }
      )
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
