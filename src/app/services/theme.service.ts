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
      root.style.setProperty('--text-color', '#ffffff');  // Changed to pure white for better contrast
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--card-background', '#1e1e1e');
      root.style.setProperty('--subtle-color', '#2d2d2d');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--hover-color', '#383838');
      root.style.setProperty('--custom-font-color', '#ffffff');  // Added for consistent text color
      root.style.setProperty('--title-color', '#ffffff');  // Added specifically for titles
      root.style.setProperty('--heading-shadow', '0 2px 4px rgba(0,0,0,0.5)');  // Added for better readability
    } else {
      root.style.setProperty('--primary-color', '#2c3e50');
      root.style.setProperty('--secondary-color', '#3498db');
      root.style.setProperty('--accent-color', '#e74c3c');
      root.style.setProperty('--text-color', '#2c3e50');
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--card-background', '#ffffff');
      root.style.setProperty('--custom-font-color', '#2c3e50');
      root.style.setProperty('--title-color', '#2c3e50');
      root.style.setProperty('--heading-shadow', 'none');
    }
  }
}


