import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quick Links</h3>
          <div class="quick-links">
            @for (link of config.navigation.links; track link.path) {
              <a [routerLink]="link.path">{{link.label}}</a>
            }
          </div>
        </div>

        <div class="footer-section">
          <h3>Connect With Me</h3>
          <div class="social-links">
            @for (social of config.footer.socialLinks; track social.platform) {
              <a [href]="social.url" target="_blank" rel="noopener">
                <i [class]="social.icon"></i>
              </a>
            }
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p> {{currentYear}} {{config.footer.copyright}}.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--primary-color);
      color: white;
      padding: 2rem 0 1rem;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
    }

    .footer-section {
      text-align: center;

      h3 {
        color: white;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    .quick-links {
      display: flex;
      gap: 1.5rem;
      justify-content: center;

      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1.5rem;
      justify-content: center;

      a {
        color: white;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.1);

      p {
        color: rgba(255,255,255,0.7);
        font-size: 0.9rem;
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        padding: 0 1rem;
      }

      .quick-links, .social-links {
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  config = this.configService.getConfig();
  currentYear = new Date().getFullYear();

  constructor(private configService: ConfigService) {}
}
