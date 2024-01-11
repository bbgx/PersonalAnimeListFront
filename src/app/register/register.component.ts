import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { emailRegex, strongPasswordRegex, usernameRegex } from '../../utils/regex';
import { CommonModule } from '@angular/common';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [ HttpClientModule ]
})
export class RegisterComponent {
  usernameRegex: RegExp = usernameRegex;
  emailRegex: RegExp = emailRegex;
  strongPasswordRegex: RegExp = strongPasswordRegex;
  registrationForm!: FormGroup;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showConfirmPassword = false;

  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
        password: ['', [Validators.required, Validators.pattern(this.strongPasswordRegex)]],
        confirmPassword: ['', [Validators.required]],
      }, {
        validators: [this.matchingPasswords('password', 'confirmPassword')],
      });
   }

   onSubmit() {
    this.authService.registerUser(this.registrationForm.value).subscribe(
      (res: any) => {
        this.toastr.success('Registration successful.', 'Success');
        this.router.navigate(['/login']);
      },
      (err: any) => {
        if (err.status === 401) {
          this.toastr.error('Unauthorized, please check your credentials.', 'Authentication error.');
        } else if (err.status === 500) {
          this.toastr.error('Internal server error. Please try again later.', 'Server error.');
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.', 'Error.');
        }
      }
    );
  }

  private matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ notEquivalent: true });
      } else {
        return confirmPassword.setErrors(null);
      }
    }
  }

  togglePasswordVisibility(controlName: string): void {
    if (controlName === 'password') {
      this.showPassword = !this.showPassword;
    } else if (controlName === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }

    const control = this.registrationForm.get(controlName);

    if (control) {
      control.setValue(control.value);
    }
  }

}
