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

  // Endpoint para traer todos los comics
  getAllComics(offset:string, name:string, order:string):Observable<any>{    
    if (name == '' && order =='') {
    return this.http.get<any>(`${this.BASE_URL}/comics${this.HEADER}&limit=20&offset=${offset}`);      
    } 
    
    if(name == '' && order == 'focDate'){
      return this.http.get<any>(`${this.BASE_URL}/comics${this.HEADER}&limit=20&offset=${offset}&orderBy=focDate`); 
    }
    
    if(name == '' && order == 'onsaleDate'){
      return this.http.get<any>(`${this.BASE_URL}/comics${this.HEADER}&limit=20&offset=${offset}&orderBy=onsaleDate`); 
    }
    
    if(name != '' && order == ''){
      return this.http.get<any>(`${this.BASE_URL}/comics${this.HEADER}&titleStartsWith=${name}&limit=20&offset=${offset}`);  
    }
    
    else{      
      return this.http.get<any>(`${this.BASE_URL}/comics${this.HEADER}&limit=20&offset=${offset}`); 
    }
  }

  // Endpoint para un comics en especifico
  getComics(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics/${id}${this.HEADER}`);
  }

  // Endpoint para traer todos los personajes de un comics en especifico
  getComicsCharacters(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics/${id}/characters${this.HEADER}`);
  }

  // Endpoint para traer todos los creadores de un comics en especifico
  getComicsCreators(id: string):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/comics/${id}/creators${this.HEADER}`);
  }

}


