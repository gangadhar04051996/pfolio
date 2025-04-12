import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';
import { ConfigService } from '../../services/config.service';
import { PageLayoutComponent } from '../../shared/layout/page-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectCarouselComponent, PageLayoutComponent],
  template: `
    <app-page-layout>
      <div class="home-content">
        <section class="hero">
          <div class="background-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
          <div class="container">
            <div class="hero-content">
              <div class="intro-text">
                <span class="greeting">{{config.hero.title}}</span>
                <h1 class="tagline">{{config.hero.subtitle}}</h1>
                <p class="lead">Full Stack Developer passionate about creating innovative web solutions</p>
                <div class="cta-group">
                  <a href="#projects" class="btn primary">{{config.hero.ctaText}}</a>
                  <a href="/contact" class="btn secondary">Get in Touch</a>
                </div>
              </div>
              <div class="tech-stack">
                <div class="tech-item" *ngFor="let tech of technologies">
                  <i [class]="tech.icon"></i>
                  <span>{{tech.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class="projects">
          <div class="container">
            <h2>{{config.projects.sectionTitle}}</h2>
            <app-project-carousel></app-project-carousel>
          </div>
        </section>
      </div>
    </app-page-layout>
  `,
  styles: [`
    .home-content {
      min-height: 100%;
      overflow: hidden;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      overflow: hidden;
    }

    .background-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 1;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
    }

    .shape-1 {
      width: 300px;
      height: 300px;
      background: rgba(58, 123, 213, 0.3);
      top: -50px;
      left: -100px;
      animation: float 8s infinite ease-in-out;
    }

    .shape-2 {
      width: 400px;
      height: 400px;
      background: rgba(0, 210, 255, 0.2);
      bottom: -100px;
      right: -100px;
      animation: float 10s infinite ease-in-out reverse;
    }

    .shape-3 {
      width: 200px;
      height: 200px;
      background: rgba(255, 102, 0, 0.2);
      top: 50%;
      left: 50%;
      animation: float 12s infinite ease-in-out;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
      z-index: 2;
    }

    .hero-content {
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .intro-text {
      max-width: 800px;
    }

    .greeting {
      font-size: 1.5rem;
      color: var(--secondary-color);
      margin-bottom: 1rem;
      display: block;
      animation: slideInLeft 1s ease-out;
    }

    .tagline {
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      animation: slideInLeft 1s ease-out 0.2s both;
    }

    .lead {
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
      animation: slideInLeft 1s ease-out 0.4s both;
    }

    .cta-group {
      display: flex;
      gap: 1rem;
      animation: slideInLeft 1s ease-out 0.6s both;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 30px;
      font-weight: 500;
      font-size: 1.1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .btn.primary {
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      color: white;
      box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
    }

    .btn.secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 210, 255, 0.4);
    }

    .tech-stack {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 2rem;
      animation: fadeIn 1s ease-out 0.8s both;
    }

    .tech-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
    }

    .tech-item i {
      font-size: 1.5rem;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (max-width: 768px) {
      .hero-content {
        text-align: center;
        padding-top: 100px;
      }

      .tagline {
        font-size: 2.5rem;
      }

      .lead {
        font-size: 1.3rem;
      }

      .cta-group {
        justify-content: center;
      }

      .tech-stack {
        justify-content: center;
      }

      .btn {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }
    }
  `]
})
export class HomeComponent {
  config = this.configService.getConfig();

  technologies = [
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'GCP', icon: 'fab fa-gcp' },
    { name: 'PostgreSQL', icon: 'fab fa-sql' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'JavaScript', icon: 'fab fa-js' },
  ];

  constructor(private configService: ConfigService) {}
}
