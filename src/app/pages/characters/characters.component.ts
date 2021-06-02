import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  loading: boolean;
  offten: number = 0;
  name:string = '';
  search:string = '';
  allCharacters: Observable<any>;

  constructor(
    private charactersService:CharactersService,
    private router:Router
    ) {
      this.loading = true;
    }
  

  ngOnInit(): void {
    this.getAllCharacters(this.offten, this.name);
  }
  
  // Funcion que trae todos los personajes
  getAllCharacters(offten, name){    
    this.charactersService.getAllCharacters(offten, name).subscribe(data =>{
      this.allCharacters = (data as any).data.results;    
      this.loading = false;
    });    
  }

  // Funcion que envia al detella de un personaje
  viewDetail(id: string){
    this.router.navigate(['/character', id]);    
  }

  // funcion de paginado (Next)
  offtenNext(){
    this.loading = true;
    this.offten += 20;
    this.getAllCharacters(this.offten, this.name);
    this.loading = false;    
  }

  // funcion de paginado (Previous)
  offtenPrevious(){
    if (this.offten > 0) {
      this.loading = true;
      this.offten -= 20;
      this.getAllCharacters(this.offten, this.name);
      this.loading = false;
    }    
  }

  // Funcion de busqueda dinamica
  onSearchCharacter(search:string){
    this.offten = 0;
    this.search = search;
    this.getAllCharacters(this.offten, this.search);    
  }

}
