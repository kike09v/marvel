import { NgModule } from '@angular/core';

// Modulos
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { CreatorsComponent } from './creators/creators.component';
import { SeriesComponent } from './series/series.component';
import { PagesComponent } from './pages.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    CreatorsComponent,
    SeriesComponent,
    PagesComponent,
    CharacterDetailComponent,
    ComicsDetailComponent,
    CreatorDetailComponent,
    SerieDetailComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    CreatorsComponent,
    SeriesComponent,
  ]
})
export class PagesModule { }
