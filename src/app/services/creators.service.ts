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

  getAllCreators(offset:string, name:string):Observable<any>{
    if (name === '') {
      return this.http.get<any>(`${this.BASE_URL}/creators${this.HEADER}&limit=20&offset=${offset}`);
    } else {
      return this.http.get<any>(`${this.BASE_URL}/creators${this.HEADER}&nameStartsWith=${name}&limit=20&offset=${offset}`);
      
    }
  }

  getCreator(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/creators/${id}${this.HEADER}`);
  }

  getCreatorComics(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/creators/${id}/comics${this.HEADER}`);
  }

  getCreatorSeries(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/creators/${id}/series${this.HEADER}`);
  }

}
