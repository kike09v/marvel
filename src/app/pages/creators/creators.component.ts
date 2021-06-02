import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatorsService } from '../../services/creators.service';


@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  allCreators: Observable<any>;
  offten:number =0;  
  txt:string = '';
  search:string = '';
  loading: boolean;

  constructor(
    private creatorsService:CreatorsService,
    private router:Router
    ) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.getAllCreators(this.offten, this.txt);
  }

  // funcion que trae todos los creadores
  getAllCreators(offten, txt){
    this.creatorsService.getAllCreators(offten, txt).subscribe(data =>{
      this.allCreators = (data as any).data.results;
      this.loading = false;       
    });    
  }

  // funcion que envia al detalle de un creador
  viewCreatorDetail(id: string){
    this.router.navigate(['/creator', id]);    
  }

  // funcion de paginado (Next)
  offtenNext(){
    this.loading = true;
    this.offten += 20;
    this.getAllCreators(this.offten, this.txt);
    this.loading = false;
  }

  // funcion de paginado (Previous)
  offtenPrevious(){
    if (this.offten > 0) {
      this.loading = true;
      this.offten -= 20;
      this.getAllCreators(this.offten, this.txt);
      this.loading = false;
    }    
  }

  // Funcion de busqueda dinamica
  onSearchCharacter(search:string){
    this.offten = 0;
    this.search = search;
    this.getAllCreators(this.offten, this.search);    
  }

}
