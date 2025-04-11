import { Component } from '@angular/core';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCarouselComponent],
  template: `
    <div class="home-content">
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p class="lead">I'm a passionate software developer specializing in web development</p>
            <a href="#projects" class="btn">View My Work</a>
          </div>
        </div>
      </section>

      <section id="projects" class="projects">
        <div class="container">
          <h2>Featured Projects</h2>
          <app-project-carousel></app-project-carousel>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-content {
      min-height: 100%;
    }

    .hero {
      height: calc(100vh - var(--header-height));
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        width: 2rem;
        height: 2rem;
        border: 2px solid rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        animation: bounce 2s infinite;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 2.8rem;
        left: 50%;
        transform: translateX(-50%);
        width: 0.5rem;
        height: 0.5rem;
        background: white;
        border-radius: 50%;
        animation: bounce 2s infinite;
      }
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: white;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
      animation: fadeInDown 1s ease-out;
    }

    .lead {
      font-size: 1.8rem;
      margin-bottom: 3rem;
      color: rgba(255, 255, 255, 0.9);
      animation: fadeInUp 1s ease-out;
    }

    .btn {
      display: inline-block;
      padding: 15px 40px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      color: white;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      animation: fadeIn 1s ease-out 0.5s both;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
    }

    .projects {
      min-height: 100vh;
      padding: 100px 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);

      h2 {
        text-align: center;
        margin-bottom: 60px;
        color: white;
        font-size: 2.5rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 0 20px;
      }

      h1 {
        font-size: 2.5rem;
      }

      .lead {
        font-size: 1.3rem;
      }

      .btn {
        padding: 12px 30px;
        font-size: 1rem;
      }
    }
  `]
})
export class HomeComponent {}
