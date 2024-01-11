import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from '../../components/sidebar-item/sidebar-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule, SidebarItemComponent, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  sidebarItemsEmployees = [
    {
      label: 'Mes demandes',
      path: '/requests',
      icon: 'add_comment',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Mes notifications',
      path: '/notifications',
      icon: 'notifications',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Mes tâches',
      path: '/tasks',
      icon: 'task',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Mes documents',
      path: '/files',
      icon: 'file_present',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Mes rapports',
      path: '/reports',
      icon: 'text_snippet',
      // access: ['ADM', 'GUEST'],
    },
  ]
  
  sidebarItemsDatas = [
    {
      label: 'Données administratives',
      path: '/administrative-datas',
      icon: 'data_usage',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Synthèse',
      path: '/summary',
      icon: 'text_snippet',
      // access: ['ADM', 'GUEST'],
    },
  ]

  sidebarItemsAbsences = [
    {
      label: 'Demande d\'absence',
      path: '/absence-request',
      icon: 'add_task',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Annulation d\'absence',
      path: '/absence-cancellation',
      icon: 'delete',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Mon planning d\'absence',
      path: '/absence-schedule',
      icon: 'edit_calendar',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Planning d\'équipe',
      path: '/team-planning',
      icon: 'perm_contact_calendar',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Historique des absences',
      path: '/absence-history',
      icon: 'history',
      // access: ['ADM', 'GUEST'],
    },
    {
      label: 'Consultation des soldes',
      path: '/balance-query',
      icon: 'account_balance_wallet',
      // access: ['ADM', 'GUEST'],
    },
  ]

  getTitle(): string {
    // this.child = this.route.snapshot.firstChild;
    // while (this.child.firstChild) {
    //   this.child = this.child.firstChild;
    // }
    // return  this.child.data.title;
    return this.route.snapshot.firstChild?.data['title'];
  }
}
