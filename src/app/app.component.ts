import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { ConfigService } from './services/config.service';
import { AnalyticsService } from './services/analytics.service';
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
  `
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
    private configService: ConfigService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    const baseTitle = this.configService.getConfig().title;

    // Set initial title
    this.titleService.setTitle(baseTitle);

    // Update title and track page views on route changes
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let title = baseTitle;

      switch (event.urlAfterRedirects) {
        case '/profile':
          title = `${baseTitle} - Profile`;
          break;
        case '/contact':
          title = `${baseTitle} - Contact`;
          break;
        case '/':
          title = baseTitle;
          break;
      }

      this.titleService.setTitle(title);
      this.analyticsService.trackPageView(event.urlAfterRedirects);
    });
  }
}
