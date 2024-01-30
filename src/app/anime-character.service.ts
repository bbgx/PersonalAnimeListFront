import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeCharacterService {
  private baseUrl = 'https://localhost:7012'

  constructor(private http: HttpClient) { }

  getCharactersByAnimeMalId(animeMalId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/v1/Character/${animeMalId}`)
  }
}
