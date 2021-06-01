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
  loading: boolean;

  constructor(
    private creatorsService:CreatorsService,
    private router:Router
    ) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.getAllCreators();
  }

  getAllCreators(){
    this.creatorsService.getAllCreators().subscribe(data =>{
      this.allCreators = (data as any).data.results;
      console.log(this.allCreators); 
      this.loading = false;       
    });    
  }

  viewDetail(id: string){
    this.router.navigate(['/creator', id]);    
  }

}
