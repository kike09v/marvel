import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  API_KEY = environment.apikey;
  HASH = environment.hash;
  BASE_URL = environment.urlApi
  HEADER = `?apikey=${this.API_KEY}&hash=${this.HASH}&ts=1`;
  
  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters${this.HEADER}`);
  }

  getCharacter(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters/${id}${this.HEADER}`);
  }

  getComicsCharacter(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters/${id}/comics${this.HEADER}`);
  }

  getseriesCharacter(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters/${id}/series${this.HEADER}`);
  }

}
