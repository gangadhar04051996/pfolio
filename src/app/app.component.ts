import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--background-color);
    }

    main {
      flex: 1;
      margin-top: var(--header-height);
      padding: 2rem;
      background-color: var(--background-color);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background-color: var(--background-color); /* Changed from var(--card-background) */
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    @media (max-width: 768px) {
      main {
        padding: 1rem;
      }

      .main-content {
        padding: 1rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'portfolio-spa';
}
