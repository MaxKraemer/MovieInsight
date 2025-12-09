import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environment';


@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiUrl = environment.tmdbApiUrl;

  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${environment.tmdbBearerToken}`
  });

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?language=de-DE`, {
      headers: this.headers
    });
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search/movie?query=${query}&language=de-DE`,
      { headers: this.headers }
    );
  }

  // Einzelner Film
  getMovie(id:number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${id}?language=de-DE`,
      { headers: this.headers }
    );
  }
}
