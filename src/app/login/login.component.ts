import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { emailRegex, usernameRegex } from '../../utils/regex';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  currentPattern = usernameRegex;

  user = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
    ) {}

  onLogin(form: NgForm) {
      this.authService.login(form.value).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.toastr.success('Login successful.', 'Welcome!');
          this.router.navigate(['/']);
        },
        err => {
          if (err.status === 401) {
            this.toastr.error('Unauthorized, please try again.', 'Authentication error.');
          } else if (err.status === 500) {
            this.toastr.error('Please refresh the page and try again.', 'Authentication error.');
          } else {
            this.toastr.error('Please refresh the page and try again.', 'Error.');
          }
        }
      )
  }

  updatePattern(event: Event) {
    if ((event.target as HTMLInputElement).value.includes('@')) {
      this.currentPattern = emailRegex;
    } else {
      this.currentPattern = usernameRegex;
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
