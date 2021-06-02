import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  API_KEY = environment.apikey;
  HASH = environment.hash;
  BASE_URL = environment.urlApi
  HEADER = `?apikey=${this.API_KEY}&hash=${this.HASH}&ts=1`;

  constructor(private http: HttpClient) { }

  // Endpoint de todos los creadores
  getAllCreators(offset:string, name:string):Observable<any>{
    if (name === '') {
      return this.http.get<any>(`${this.BASE_URL}/creators${this.HEADER}&limit=20&offset=${offset}`);
    } else {
      return this.http.get<any>(`${this.BASE_URL}/creators${this.HEADER}&nameStartsWith=${name}&limit=20&offset=${offset}`);
      
    }
  }

  // Endpoint de un creador en especifico
  getCreator(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/creators/${id}${this.HEADER}`);
  }

  // Endpoint de todos los comics de un creador especifico
  getCreatorComics(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/creators/${id}/comics${this.HEADER}`);
  }

  // Endpoint de todas las series de un creador especifico
  getCreatorSeries(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/creators/${id}/series${this.HEADER}`);
  }

}
