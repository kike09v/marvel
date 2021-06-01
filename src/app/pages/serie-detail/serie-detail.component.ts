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
    this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    console.log(this.id);
    
    this.loading = true; 
  }

  ngOnInit(): void {
    this.getSerie(this.id);
    this.getSerieCharacters(this.id);
    this.getSerieComics(this.id);
    this.getSerieCreators(this.id);
  }

  getSerie(id:string){

  }

  getSerieCharacters(id:string){

  }

  getSerieComics(id:string){

  }

  getSerieCreators(id:string){

  }


}
