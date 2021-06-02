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

  // Endpoint para traer todos los personajes
  getAllCharacters(offset:string, name:string):Observable<any>{
    if (name === '') {      
      return this.http.get<any>(`${this.BASE_URL}/characters${this.HEADER}&limit=20&offset=${offset}`);
    }else{
      return this.http.get<any>(`${this.BASE_URL}/characters${this.HEADER}&nameStartsWith=${name}&limit=20&offset=${offset}`);
    }
  }

  // Endpoint para traer un personaje en especifico
  getCharacter(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters/${id}${this.HEADER}`);
  }

  // Endpoint para traer todos los comics de un personaje especifico
  getComicsCharacter(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters/${id}/comics${this.HEADER}`);
  }

  // Endpoint para traer todas las series de un personaje especifico
  getseriesCharacter(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/characters/${id}/series${this.HEADER}`);
  }

}
