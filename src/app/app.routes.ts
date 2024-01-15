import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ConnectedGuard } from './guards/connected.guard';
import { DashboardComponent } from './views/home/dashboard/dashboard.component';
import { AdministrativeDatasComponent } from './views/home/administrative-datas/administrative-datas.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        data: { title: 'Test'}, 
        children: [
            { path: '', component: DashboardComponent, data: { title:''} },
            { path: 'administrative-datas', component: AdministrativeDatasComponent, data: { title: 'Données administratives'} },
        ],
        canActivate: [AuthGuard],
    },
    { 
        path: 'login', 
        component: LoginComponent, 
        canActivate: [ConnectedGuard] 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    },
];
