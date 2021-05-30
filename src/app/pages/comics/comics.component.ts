import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  allComics: Observable<any>;
  loading: boolean;

  constructor(private comicsService:ComicsService) {
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

}
