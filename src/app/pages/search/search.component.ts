import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';
import { CreatorsService } from 'src/app/services/creators.service';
import { SeriesService } from 'src/app/services/series.service';
import { CharactersService } from '../../services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean;
  txt:string = '';
  offten:string ='0';  
  order:string = '';
  characters: Observable<any>;
  allComics: Observable<any>;
  creators: Observable<any>;
  series: Observable<any>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService:CharactersService,
    private comicsService:ComicsService,
    private creatorsService:CreatorsService,
    private seriesService:SeriesService,
    private router:Router

  ) { 
    this.activatedRoute.params.subscribe( params =>{ this.txt = params['text'];})
    
  }
 
  ngOnInit(): void {
    this.searchCharacter(this.txt);
    this.searchComics(this.txt);
    this.searchCreators(this.txt);
    this.searchSeries(this.txt);
  }

  // Funcion para buscar un personaje en especifico
  searchCharacter(txt: string){
    this.charactersService.getAllCharacters(this.offten, txt).subscribe(data =>{
      this.characters = (data as any).data.results;
    });
  }

  // Funcion para buscar un comics en especifico
  searchComics(txt: string){
    this.comicsService.getAllComics(this.offten, txt, this.order ).subscribe(data =>{
      this.allComics = (data as any).data.results
    });
  }

  // Funcion para buscar un creador en especifico
  searchCreators(txt: string){
    this.creatorsService.getAllCreators(this.offten, txt).subscribe(data =>{
      this.creators = (data as any).data.results
    });
  }

  // Funcion para buscar una serie en especifico
  searchSeries(txt: string){
    this.seriesService.getAllSeries(this.offten, txt, this.order).subscribe(data =>{
      this.series = (data as any).data.results
    });
  }

  // Funcion que envia al detalle de un personaje
  viewDetailCharacter(id: string){
    this.router.navigate(['/character', id]); 
  }

  // Funcion que envia al detalle de un comics
  viewDetailComics(id: string){
    this.router.navigate(['/comics', id]); 
  }

  // Funcion que envia al detalle de un creador
  viewDetailCreators(id: string){
    this.router.navigate(['/creator', id]); 
  }

  // Funcion que envia al detalle de una serie
  viewDetailSerie(id: string){
    this.router.navigate(['/serie', id]); 
  }


}
