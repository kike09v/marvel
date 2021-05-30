import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id:string = '';
  loading: boolean;
  public character: Observable<any>;


    constructor(private activatedRoute: ActivatedRoute, private charactersService:CharactersService) {
      this.loading = true;

      this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    }

     ngOnInit(): void {
      this.getCharacter(this.id);
    }

    getCharacter(id:string){

      this.charactersService.getCharacter(id).subscribe(data =>{
        this.character = (data as any).data.results[0];     
        console.log(this.character);
        this.loading = false;            
      });      
      
    }


}
