import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://localhost:7012/api/v1/Auth/register'
  private loginUrl = 'https://localhost:7012/api/v1/Auth/login'

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this.registerUrl, user);
  }

  login(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }
}
