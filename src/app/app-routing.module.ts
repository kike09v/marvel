import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [  
    
    { path: '', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
