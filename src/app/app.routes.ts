import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    { 
        path: '', component: HomeComponent, data: { title: 'Test'},
    },
    { path: '**', component: PageNotFoundComponent },
];
