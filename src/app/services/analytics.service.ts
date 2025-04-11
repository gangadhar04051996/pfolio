import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ConfigService } from './config.service';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private measurementId: string;

  constructor(
    private configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.measurementId = this.configService.getGoogleAnalyticsId();
    this.initializeGoogleAnalytics();
  }

  private initializeGoogleAnalytics(): void {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', this.measurementId);
    }
  }

  // Method to track page views
  trackPageView(path: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.gtag('config', this.measurementId, {
        page_path: path
      });
    }
  }

  // Method to track custom events
  trackEvent(eventName: string, eventParams: Record<string, any> = {}): void {
    if (isPlatformBrowser(this.platformId)) {
      window.gtag('event', eventName, eventParams);
    }
  }
}
