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
  loading: boolean;

  constructor(
    private comicsService:ComicsService,
    private router:Router
    ) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics(){
    this.comicsService.getAllComics().subscribe(data =>{
      this.allComics = (data as any).data.results;
      console.log(this.allComics);
      this.loading = false;
    });    
  }

  viewDetail(id: string){
    this.router.navigate(['/comics', id]);    
  }

}
