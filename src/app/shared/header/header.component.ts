import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgFor],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a [routerLink]="['/']">{{config.navigation.brand}}</a>
        </div>
        <div class="nav-links">
          <ng-container *ngFor="let link of config.navigation.links">
            <a [routerLink]="[link.path]"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: link.path === '/'}">
              {{link.label}}
            </a>
          </ng-container>
          <button class="theme-toggle" (click)="toggleTheme()">
            <i class="fas" [class.fa-sun]="isDarkTheme$ | async" [class.fa-moon]="!(isDarkTheme$ | async)"></i>
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 1rem;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
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
        border-radius: 5px;
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
  config = this.configService.getConfig();
  isDarkTheme$ = this.themeService.isDarkTheme$;

  constructor(private configService: ConfigService, private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
