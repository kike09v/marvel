import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatorsService } from '../../services/creators.service';

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
    ) { 
    this.activatedRoute.params.subscribe( params =>{ this.id = params['id'];})
    this.loading = true;    

    }

  ngOnInit(): void {
    this.getCreator(this.id);
    this.getCreatorComics(this.id);
    this.getCreatorSeries(this.id);
  }


  getCreator(id:string){
    this.creatorsService.getCreator(id).subscribe(data =>{
      this.creator = (data as any).data.results[0];  
      console.log(this.creator);
            
      this.loading = false;            
    });     

  }

  getCreatorComics(id:string){
    this.creatorsService.getCreatorComics(id).subscribe(data =>{
      this.creatorComics = (data as any).data.results; 
      console.log(this.creatorComics);
          
    }); 
  }

  getCreatorSeries(id:string){
    this.creatorsService.getCreatorSeries(id).subscribe(data =>{
      this.CreatorSeries = (data as any).data.results; 
      console.log(this.CreatorSeries);
          
    }); 
  }




}
