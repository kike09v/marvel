import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Observable<any>;
  loading: boolean;

  constructor(
    private charactersService:CharactersService,
    private router:Router
    ) {
      this.loading = true;
    }
  

  ngOnInit(): void {
    this.getAllCharacters();

  }
  
  getAllCharacters(){
    
    this.charactersService.getAllCharacters().subscribe(data =>{
      this.allCharacters = (data as any).data.results;
      console.log(this.allCharacters);      
      this.loading = false;
    });    

  }

  viewDetail(id: string){
    this.router.navigate(['/character', id]);    
  }


}
