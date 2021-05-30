import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { SeriesComponent } from './series/series.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
    { 
        path: '', 
        component:PagesComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'characters', component: CharactersComponent },
            { path: 'characters/:id', component: CharacterDetailComponent },
            { path: 'comics', component: ComicsComponent },            
            { path: 'creators', component: CreatorsComponent },            
            { path: 'series', component: SeriesComponent },            
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
