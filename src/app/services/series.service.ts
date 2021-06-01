import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  API_KEY = environment.apikey;
  HASH = environment.hash;
  BASE_URL = environment.urlApi
  HEADER = `?apikey=${this.API_KEY}&hash=${this.HASH}&ts=1`;

  constructor(private http: HttpClient) { }

  getAllSeries():Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series${this.HEADER}`);
  }

  getSerie(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}${this.HEADER}`);
  }

  getSerieCharacters(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}/character${this.HEADER}`);
  }

  getSerieComics(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}/comics${this.HEADER}`);
  }

  getSerieCreators(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}/creators${this.HEADER}`);
  }

}
