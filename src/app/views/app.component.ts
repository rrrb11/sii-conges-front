import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sii-conges';

  constructor(private themeService: ThemeService) {}

  // ngOnInit() {
  //   if (typeof localStorage !== 'undefined') {
  //     const savedTheme = localStorage.getItem('theme') ?? '';
  //     this.themeService.setTheme(savedTheme);
  //   }
  // }

  // setLightMode() {
  //   this.themeService.setLightMode();
  //   localStorage.setItem('theme', 'light');
  // }

  // setDarkMode() {
  //   this.themeService.setDarkMode();
  //   localStorage.setItem('theme', 'dark');
  // }

  // setOSPreference() {
  //   this.themeService.setOSPreference();
  //   localStorage.removeItem('theme');
  // }

}
