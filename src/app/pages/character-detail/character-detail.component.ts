import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      private charactersService:CharactersService
      ) {

      this.loading = true;
      this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    }

     ngOnInit(): void {
      this.getCharacter(this.id);
      this.getComicsCharacter(this.id);
      this.getseriesCharacter(this.id);
    }

    getCharacter(id:string){
      this.charactersService.getCharacter(id).subscribe(data =>{
        this.character = (data as any).data.results[0];  
        this.loading = false;            
      });            
    }

    getComicsCharacter(id:string){
      this.charactersService.getComicsCharacter(id).subscribe(data => {
        this.comicsCharacter = (data as any).data.results;        
      });
    }

    getseriesCharacter(id:string){
      this.charactersService.getseriesCharacter(id).subscribe(data =>{
        this.seriesCharacter = (data as any).data.results;
        console.log(this.seriesCharacter);        
      })
    }


}
