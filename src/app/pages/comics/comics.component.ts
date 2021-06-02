import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  allComics: Observable<any>;
  offten: number = 0;
  name:string = '';
  search:string = '';
  order:string = '';
  loading: boolean;

  constructor(
    private comicsService:ComicsService,
    private router:Router
    ) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.getAllComics(this.offten, this.name, this.order);
  }

  getAllComics(offten, name, order){
    this.comicsService.getAllComics(offten, name, order).subscribe(data =>{
      this.allComics = (data as any).data.results;
      this.loading = false;
    });    
  }

  viewDetail(id: string){
    this.router.navigate(['/comics', id]);    
  }

  // funcion de paginado (Next)
  offtenNext(){
    this.loading = true;
    this.offten += 20;
    this.getAllComics(this.offten, this.name, this.order);
    this.loading = false;    
  }

  // funcion de paginado (Previous)
  offtenPrevious(){
    if (this.offten > 0) {
      this.loading = true;
      this.offten -= 20;
      this.getAllComics(this.offten, this.name, this.order);
      this.loading = false;
    }    
  }

  // Funcion de busqueda dinamica
  onSearchCharacter(search:string){
    this.offten = 0;
    this.order ='';
    this.search = search;    
    this.getAllComics(this.offten, this.search, this.order);    
  }
  
  // Funcion de filtrado por fecha
  orderDate(){
    this.order = 'focDate';
    this.search = '';
    this.getAllComics(this.offten, this.search, this.order);    
  }

  // Funcion de filtrado por precio
  orderPrice(){
    this.order = 'onsaleDate';
    this.search = '';
    this.getAllComics(this.offten, this.search, this.order);    
  }


}
