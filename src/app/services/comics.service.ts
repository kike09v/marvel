import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  API_KEY = environment.apikey;
  HASH = environment.hash;
  BASE_URL = environment.urlApi
  HEADER = `?apikey=${this.API_KEY}&hash=${this.HASH}&ts=1`;

  constructor(private http: HttpClient) { }

  getAllComics():Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics${this.HEADER}`);
  }

  getComics(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics/${id}${this.HEADER}`);
  }

  getComicsCharacters(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics/${id}/characters${this.HEADER}`);
  }

  getComicsCreators(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics/${id}/creators${this.HEADER}`);
  }

}


