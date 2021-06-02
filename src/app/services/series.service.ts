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

  // Endpoint de todas las series
  getAllSeries(offset:string, name:string, filter:string):Observable<any>{
  if (name == '' && filter == '') {
    return this.http.get<any>(`${this.BASE_URL}/series${this.HEADER}&limit=20&offset=${offset}`);    
  } else if(name == '' && filter != '') {
    return this.http.get<any>(`${this.BASE_URL}/series${this.HEADER}&seriesType=${filter}&limit=20&offset=${offset}`);    
  }else if(name != '' && filter == ''){
    return this.http.get<any>(`${this.BASE_URL}/series${this.HEADER}&titleStartsWith=${name}&limit=20&offset=${offset}`);    
  }else {
    return this.http.get<any>(`${this.BASE_URL}/series${this.HEADER}&limit=20&offset=${offset}`);   
  }
  }

  // Endpoint de una serie en especifico
  getSerie(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}${this.HEADER}`);
  }

  // Endpoint de todos los personajes de una serie en especifico
  getSerieCharacters(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}/characters${this.HEADER}`);
  }

  // Endpoint de todos los comics de una serie en especifico
  getSerieComics(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}/comics${this.HEADER}`);
  }

  // Endpoint de todos los creadores de una serie en especifico
  getSerieCreators(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/series/${id}/creators${this.HEADER}`);
  }

}
