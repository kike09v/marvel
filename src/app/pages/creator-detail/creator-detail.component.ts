import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatorsService } from '../../services/creators.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {

  id:string = '';
  loading: boolean;
  creator: Observable<any>;
  creatorComics: Observable<any>;
  CreatorSeries: Observable<any>;


  constructor( 
    private creatorsService:CreatorsService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { 
    this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    this.loading = true;    

    }

  ngOnInit(): void {
    this.getCreator(this.id);
    this.getCreatorComics(this.id);
    this.getCreatorSeries(this.id);
  }

  // Funcion que trae a un creador en especifico
  getCreator(id:string){
    this.creatorsService.getCreator(id).subscribe(data =>{
      this.creator = (data as any).data.results[0];  
      this.loading = false;            
    });    
  }

  // Funcion que trae todos los comics de un creador en especifico
  getCreatorComics(id:string){
    this.creatorsService.getCreatorComics(id).subscribe(data =>{
      this.creatorComics = (data as any).data.results;           
    }); 
  }

  // Funcion que trae todas las series de un creador en especifico
  getCreatorSeries(id:string){
    this.creatorsService.getCreatorSeries(id).subscribe(data =>{
      this.CreatorSeries = (data as any).data.results; 
    }); 
  }

  // funcion que envia al detalle de comics
  viewComicsDetail(id: string){
    this.router.navigate(['/comics', id]);    
  }

  // funcion que envia al detalle de una serie
  viewSerieDetail(id:string){
    this.router.navigate(['/serie', id]);    
  }

}
