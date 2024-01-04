import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [ HttpClientModule ]
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    this.authService.registerUser(form.value).subscribe(
      res => {
        console.log('User registered', res);
      },
      err => {
        console.error('Error', err)
      }
    )
  }
}
