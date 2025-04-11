import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;  // Should be a relative path starting with '/assets/'
  githubUrl: string;
  technologies: string[];
}

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="project-container">
      <!-- Previous button -->
      <button
        class="nav-button prev"
        [class.hidden]="isLeftEdge"
        (click)="scroll('left')"
        aria-label="Previous project">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div class="project-scroll" #scrollContainer (scroll)="onScroll()">
        @for (project of projects; track project.title; let first = $first) {
          <div class="project-card">
            <div class="project-image">
              <img
                [ngSrc]="project.imageUrl"
                [alt]="project.title"
                width="350"
                height="263"
                [priority]="first"
                [loading]="first ? undefined : 'lazy'"
              >
            </div>
            <div class="project-content">
              <h3>{{project.title}}</h3>
              <p>{{project.description}}</p>
              <div class="technologies">
                @for (tech of project.technologies; track tech) {
                  <span class="tech-tag">{{tech}}</span>
                }
              </div>
              <a [href]="project.githubUrl" target="_blank" class="btn">View on GitHub</a>
            </div>
          </div>
        }
      </div>

      <!-- Next button -->
      <button
        class="nav-button next"
        [class.hidden]="isRightEdge"
        (click)="scroll('right')"
        aria-label="Next project">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    .project-container {
      width: 100%;
      overflow: hidden;
      padding: 20px 0;
      position: relative;
    }

    .project-scroll {
      display: flex;
      overflow-x: auto;
      gap: 30px;
      padding: 20px;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */

      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
      }
    }

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color);
      border: none;
      cursor: pointer;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      opacity: 1;

      &.hidden {
        opacity: 0;
        pointer-events: none;
      }

      svg {
        width: 24px;
        height: 24px;
        stroke: white;
      }

      &:hover {
        background: var(--secondary-color);
      }

      &.prev {
        left: 10px;
      }

      &.next {
        right: 10px;
      }
    }

    .project-card {
      flex: 0 0 auto;
      width: 350px;
      background: var(--card-background);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .project-image {
      width: 100%;
      height: 263px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .project-content {
      padding: 20px;

      h3 {
        margin-bottom: 10px;
        color: var(--primary-color);
      }

      p {
        margin-bottom: 15px;
        color: var(--text-color);
      }
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }

    .tech-tag {
      padding: 4px 8px;
      background: var(--background-color);
      border-radius: 4px;
      font-size: 0.8rem;
      color: var(--custom-font-color);
    }

    @media (max-width: 768px) {
      .project-card {
        width: 300px;
      }

      .nav-button {
        width: 35px;
        height: 35px;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      .project-image {
        height: 225px;
      }
    }
  `]
})
export class ProjectCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  isLeftEdge = true;
  isRightEdge = false;
  private resizeObserver: any;
  private isBrowser: boolean;

  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Angular and TypeScript',
      imageUrl: '/assets/projects/project1.PNG',
      githubUrl: 'https://github.com/yourusername/portfolio',
      technologies: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time updates',
      imageUrl: 'C:/Users/tilak/Documents/pfolio/portfolio-spa/src/assets/projects/project1.PNG',
      githubUrl: '/assets/projects/project1.PNG',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React']
    },
    {
      title: 'Task Manager',
      description: 'A collaborative task management application',
      imageUrl: '/assets/projects/project3.PNG',
      githubUrl: 'https://github.com/yourusername/taskmanager',
      technologies: ['Vue.js', 'Firebase', 'Vuex']
    },
    {
      title: 'Weather App',
      description: 'Real-time weather forecasting application',
      imageUrl: 'C:/Users/tilak/Documents/pfolio/portfolio-spa/src/assets/projects/project1.PNG',
      githubUrl: '/assets/projects/project3.PNG',
      technologies: ['React Native', 'Redux', 'Weather API']
    }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkScrollPosition();
      });
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Start observing the scroll container
      this.resizeObserver?.observe(this.scrollContainer.nativeElement);
      // Initial check for scroll position
      this.checkScrollPosition();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      // Cleanup
      this.resizeObserver?.disconnect();
    }
  }

  onScroll() {
    if (this.isBrowser) {
      this.checkScrollPosition();
    }
  }

  checkScrollPosition() {
    if (!this.isBrowser) return;

    const element = this.scrollContainer.nativeElement;

    // Check if we're at the left edge
    this.isLeftEdge = element.scrollLeft <= 0;

    // Check if we're at the right edge
    this.isRightEdge = Math.abs(
      element.scrollWidth - element.clientWidth - element.scrollLeft
    ) < 1;
  }

  scroll(direction: 'left' | 'right') {
    if (!this.isBrowser) return;

    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 400; // Adjust this value to control scroll distance

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }
}
