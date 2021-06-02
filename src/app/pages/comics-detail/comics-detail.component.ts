import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComicsService } from '../../services/comics.service';


@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.css']
})
export class ComicsDetailComponent implements OnInit {

  id:string = '';
  loading: boolean;
  comics: Observable<any>;
  comicsCharacters: Observable<any>;
  comicsCreators: Observable<any>;

  constructor(
    private comicsService:ComicsService,
    private activatedRoute: ActivatedRoute,
    private router:Router

  ) { 
    this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    this.loading = true;    

  }

  ngOnInit(): void {
    this.getComic(this.id);
    this.getComicsCharacters(this.id);
    this.getComicsCreators(this.id);
  }

  // funcion que trae un comics en especifico
  getComic(id:string){
    this.comicsService.getComics(id).subscribe(data =>{
      this.comics = (data as any).data.results[0];  
      this.loading = false;            
    });            
  }

  // Funcion que trae todos los personajes de un comics especifico  
  getComicsCharacters(id:string){
    this.comicsService.getComicsCharacters(id).subscribe(data =>{
      this.comicsCharacters = (data as any).data.results;     
    });            
  }
  
  // Funcion que trae todos los creadores de un comics especifico  
  getComicsCreators(id:string){
    this.comicsService.getComicsCreators(id).subscribe(data =>{
      this.comicsCreators = (data as any).data.results;  
    });            
  }
  
  // Funcion que envia al detalle del personaje
  viewDetailCharacter(id: string){
    this.router.navigate(['/character', id]); 
  }

  // Funcion que envia al detalle de un creador
  viewCreator(text: string){
    const txtSplit = text.split('/');
    const id = txtSplit[6];
    
    this.router.navigate(['/creator', id]); 
  }

}
