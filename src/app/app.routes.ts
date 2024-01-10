import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ConnectedGuard } from './guards/connected.guard';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        data: { title: 'Test'}, 
        // canActivate: [AuthGuard],
    },
    { 
        path: 'login', 
        component: LoginComponent, 
        // canActivate: [ConnectedGuard] 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    },
];
