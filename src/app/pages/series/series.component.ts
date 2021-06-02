import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeriesService } from '../../services/series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  allseries: Observable<any>;
  loading:boolean;
  txt:string = '';
  search:string = '';
  offten:number = 0; 
  filterSeries:string = '';

  constructor(
    private seriesService:SeriesService,
    private router:Router
    ) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.getAllSeries(this.offten, this.txt, this.filterSeries);
  }

  // funcion que trae todas las series
  getAllSeries(offten, txt, filterSeries){
    this.seriesService.getAllSeries(offten, txt, filterSeries).subscribe(data =>{
      this.allseries = (data as any).data.results;  
      this.loading = false;
    });    
  }

  // funcion que envia al detalle de una serie en especifico
  viewDetail(id: string){
    this.router.navigate(['/serie', id]);    
  }

  // funcion de paginado (Next)
  offtenNext(){
    this.loading = true;
    this.offten += 20;
    this.getAllSeries(this.offten, this.txt, this.filterSeries);
    this.loading = false;    
  }

  // funcion de paginado (Previous)
  offtenPrevious(){
    if (this.offten > 0) {
      this.loading = true;
      this.offten -= 20;
      this.getAllSeries(this.offten, this.txt, this.filterSeries);
      this.loading = false;
    }    
  }

  // Funcion de busqueda dinamica
  onSearchCharacter(search:string){
    this.loading = true;
    this.offten = 0;
    this.search = search;
    this.filterSeries = '';
    this.getAllSeries(this.offten, this.search, this.filterSeries);    
    this.loading = false;
  }

  // funcion para filtrar por el tipo de serie
  filterSerie(filterTxt:string){
    this.offten = 0;
    this.search = '';
    this.filterSeries = filterTxt;
    this.getAllSeries(this.offten, this.search, this.filterSeries);  
  }

}
