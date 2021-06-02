import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  getSerie(id:string){
    this.seriesService.getSerie(id).subscribe(data =>{
      this.serie = (data as any).data.results[0];
      this.loading = false;      
    });
  }

  getSerieCharacters(id:string){
    this.seriesService.getSerieCharacters(id).subscribe(data =>{
      this.serieCharacter = (data as any).data.results;
    });
  }  

  getSerieComics(id:string){
    this.seriesService.getSerieComics(id).subscribe(data =>{
      this.serieComics = (data as any).data.results;
    });
  }

  getSerieCreators(id:string){
    this.seriesService.getSerieCreators(id).subscribe(data =>{
      this.serieCreators = (data as any).data.results;
    });
  }


}
