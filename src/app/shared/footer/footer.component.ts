import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <a routerLink="/">Home</a>
            <a routerLink="/profile">Profile</a>
            <a routerLink="/contact">Contact</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Connect With Me</h3>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{currentYear}} Your Name. All rights reserved.</p>
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
  currentYear = new Date().getFullYear();
}
