import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/">My Portfolio</a>
        </div>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/profile" routerLinkActive="active">Profile</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
          <button class="theme-toggle" (click)="toggleTheme()">
            <i class="fas" [class.fa-sun]="isDarkTheme$ | async" [class.fa-moon]="!(isDarkTheme$ | async)"></i>
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: var(--primary-color);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      height: var(--header-height);
    }

    .logo a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: var(--secondary-color);
      }
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;

      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--secondary-color);
        }

        &.active {
          background-color: var(--secondary-color);
        }
      }
    }

    .theme-toggle {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--secondary-color);
      }
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isDarkTheme$ = this.themeService.isDarkTheme$;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
