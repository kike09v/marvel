import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeriesService } from '../../services/series.service';


@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  id:string = '';
  loading: boolean;
  serie: Observable<any>;
  serieCharacter: Observable<any>;
  serieComics: Observable<any>;
  serieCreators: Observable<any>;


  constructor(
    private seriesService:SeriesService,
    private activatedRoute: ActivatedRoute,
    private router:Router


  ) { 
    this.loading = true; 
    this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    
  }

  ngOnInit(): void {
    this.getSerie(this.id);
    this.getSerieCharacters(this.id);
    this.getSerieComics(this.id);
    this.getSerieCreators(this.id);
  }

  // funcion que trae una serie en especifico
  getSerie(id:string){
    this.seriesService.getSerie(id).subscribe(data =>{
      this.serie = (data as any).data.results[0];
      this.loading = false;      
    });
  }

  // Funcion que trae todos los personajes de una serie en especifico
  getSerieCharacters(id:string){
    this.seriesService.getSerieCharacters(id).subscribe(data =>{
      this.serieCharacter = (data as any).data.results;
    });
  }  

  // Funcion que trae todos los comics de una serie en especifico
  getSerieComics(id:string){
    this.seriesService.getSerieComics(id).subscribe(data =>{
      this.serieComics = (data as any).data.results;
    });
  }

  // Funcion que trae todos los creadores de una serie en especifico
  getSerieCreators(id:string){
    this.seriesService.getSerieCreators(id).subscribe(data =>{
      this.serieCreators = (data as any).data.results;
    });
  }


  // Funcion que envia al detella de un personaje especifico
  viewCharacterDetail(id:string){
    this.router.navigate(['/character', id]); 
  }

  // Funcion que envia al detella de un comics especifico
  viewComicsDetail(id:string){
    this.router.navigate(['/comics', id]); 
  }

  // Funcion que envia al detella de un creador en especifico
  viewCreatorDetail(id:string){
    this.router.navigate(['/creator', id]); 
  }


}
