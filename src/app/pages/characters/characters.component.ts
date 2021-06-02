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
  offten: number = 0;
  name:string = '';
  search:string = '';

  constructor(
    private charactersService:CharactersService,
    private router:Router
    ) {
      this.loading = true;
    }
  

  ngOnInit(): void {
    this.getAllCharacters(this.offten, this.name);
  }
  
  getAllCharacters(offten, name){
    
    this.charactersService.getAllCharacters(offten, name).subscribe(data =>{
      this.allCharacters = (data as any).data.results;
      console.log(this.allCharacters);      
      this.loading = false;
    });    

  }

  viewDetail(id: string){
    this.router.navigate(['/character', id]);    
  }

  offtenNext(){

    this.loading = true;
    this.offten += 20;
    this.getAllCharacters(this.offten, this.name);
    this.loading = false;

    
  }

  offtenPrevious(){
    if (this.offten > 0) {
      this.loading = true;
      this.offten -= 20;
      this.getAllCharacters(this.offten, this.name);
      this.loading = false;
    }    
  }

  onSearchCharacter(search:string){
    this.offten = 0;
    this.search = search;
    this.getAllCharacters(this.offten, this.search);    
  }


}
