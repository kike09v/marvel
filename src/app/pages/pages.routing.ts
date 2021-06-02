import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';

import { CreatorsComponent } from './creators/creators.component';
import { CreatorDetailComponent } from './creator-detail/creator-detail.component';

import { SeriesComponent } from './series/series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
    { 
        path: '', 
        component:PagesComponent,
        children: [
            // Ruta de inicio
            { path: '', component: HomeComponent },
            // Rutas de los personajes
            { path: 'characters', component: CharactersComponent },
            { path: 'character/:id', component: CharacterDetailComponent },
            // Rutas de los comics
            { path: 'comics', component: ComicsComponent }, 
            { path: 'comics/:id', component: ComicsDetailComponent },   
            // Rutas de los creadores
            { path: 'creators', component: CreatorsComponent }, 
            { path: 'creator/:id', component: CreatorDetailComponent },
            // Rutas de las series
            { path: 'series', component: SeriesComponent },     
            { path: 'serie/:id', component: SerieDetailComponent },  
            // Ruta del buscador global
            { path: 'search/:text', component: SearchComponent },
            // Ruta de la pagina 404
            { path: '**', component: NotFoundComponent },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
