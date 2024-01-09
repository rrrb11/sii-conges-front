import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  // par default on set le theme dark ou light selon les parametre du navigateur
  setTheme(theme: string) {
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setLightMode() {
    this.setTheme('light');
  }

  setDarkMode() {
    this.setTheme('dark');
  }

  setOSPreference() {
    this.setTheme('');
  }
}
