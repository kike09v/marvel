import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id:string = '';
  loading: boolean;
  character: Observable<any>;
  comicsCharacter: Observable<any>;
  seriesCharacter:Observable<any>;
  writer:string = '';


    constructor(
      private activatedRoute: ActivatedRoute,
      private charactersService:CharactersService,
      private router:Router

      ) {

      this.loading = true;
      this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    }

     ngOnInit(): void {
      this.getCharacter(this.id);
      this.getComicsCharacter(this.id);
      this.getseriesCharacter(this.id);
    }

    // Funcion que trae un personaje especifico
    getCharacter(id:string){
      this.charactersService.getCharacter(id).subscribe(data =>{
        this.character = (data as any).data.results[0];  
        this.loading = false;            
      });            
    }

    // Funcion que trae todos los comics donde aparece un personaje especifico
    getComicsCharacter(id:string){
      this.charactersService.getComicsCharacter(id).subscribe(data => {
        this.comicsCharacter = (data as any).data.results;        
      });
    }

    // Funcion que trae todas las series donde aparece un personaje especifico
    getseriesCharacter(id:string){
      this.charactersService.getseriesCharacter(id).subscribe(data =>{
        this.seriesCharacter = (data as any).data.results;    
      })
    }

    // Funcion que envia al detalle del comics
    viewComicsDetail(id:string){
    this.router.navigate(['/comics', id]); 
    }

    // Funcion que envia al detalle de la serie
    viewSerieDetail(id:string){
    this.router.navigate(['/serie', id]); 
    }

}
