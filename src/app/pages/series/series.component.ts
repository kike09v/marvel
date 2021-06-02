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
  offten:number = 0; 

  constructor(
    private seriesService:SeriesService,
    private router:Router
    ) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.getAllSeries(this.offten, this.txt);
  }

  getAllSeries(offten, txt){
    this.seriesService.getAllSeries(offten, txt).subscribe(data =>{
      this.allseries = (data as any).data.results;
      console.log(this.allseries);     
      this.loading = false;
    });    
  }

  viewDetail(id: string){
    this.router.navigate(['/serie', id]);    
  }


}
