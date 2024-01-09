import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/auth/login/login.component';

export const routes: Routes = [
    { 
        path: '', component: HomeComponent, data: { title: 'Test'},
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent },
];
