import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  toggleTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.value);
    this.updateThemeColors(this.isDarkTheme.value);
  }

  private updateThemeColors(isDark: boolean) {
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty('--primary-color', '#121212');
      root.style.setProperty('--secondary-color', '#4dabf7');
      root.style.setProperty('--accent-color', '#ff6b6b');
      root.style.setProperty('--text-color', '#f8f9fa');
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--card-background', '#1e1e1e');
      root.style.setProperty('--subtle-color', '#2d2d2d');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--hover-color', '#383838');
    } else {
      root.style.setProperty('--primary-color', '#2c3e50');
      root.style.setProperty('--secondary-color', '#3498db');
      root.style.setProperty('--accent-color', '#e74c3c');
      root.style.setProperty('--text-color', '#ffffff'); // Changed to white for better contrast
      root.style.setProperty('--background-color', '#2c3e50');
      root.style.setProperty('--card-background', '#2c3e50');
    }
  }
}

