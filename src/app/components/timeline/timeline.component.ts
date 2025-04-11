import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  period: string;
  institution: string;
  place: string;
  description: string;
  logoUrl?: string;
  isPresent?: boolean;
  responsibilities: string[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline-wrapper">
      <div class="timeline">
        <div class="timeline-start-point">
          <span>Present</span>
          <br><br>
        </div>
        @for (item of timelineItems; track item.period) {
          <div class="timeline-item">
            <div class="timeline-point"></div>
            <div class="timeline-content"
                 [class.expanded]="item.isExpanded"
                 (mouseenter)="expandCard(item)"
                 (mouseleave)="collapseCard(item)">
              <div class="content-header">
                @if (item.logoUrl) {
                  <div class="company-logo">
                    <img [src]="item.logoUrl" [alt]="item.institution">
                  </div>
                }
                <div class="period">{{item.period}}</div>
                <h3>{{item.institution}}</h3>
                <div class="place">{{item.place}}</div>
                <p class="description">{{item.description}}</p>
              </div>

              <div class="expanded-content" [class.show]="item.isExpanded">
                <h4>Key Responsibilities:</h4>
                <ul>
                  @for (responsibility of item.responsibilities; track responsibility) {
                    <li>{{responsibility}}</li>
                  }
                </ul>
              </div>
            </div>
          </div>
        }
        <div class="timeline-end-point">
          <div class="end-dot"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline-wrapper {
      min-height: 100vh;
      padding: 40px 0;
      background: linear-gradient(135deg,
        rgba(58, 123, 213, 0.1) 0%,
        rgba(0, 210, 255, 0.1) 100%);
    }

    .timeline {
      position: relative;
      padding: 20px 0;
      max-width: 1000px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: calc(100% - 100px);
      top: 40px;
      background: linear-gradient(180deg,
        #3a7bd5 0%,
        #00d2ff 100%);
      border-radius: 1.5px;
    }

    .timeline-start-point,
    .timeline-end-point {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 0 8px rgba(58, 123, 213, 0.2);
      z-index: 2;

      span {
        position: absolute;
        white-space: nowrap;
        color: #2c3e50;
        font-weight: 600;
        font-size: 0.9rem;
        background: white;
        padding: 4px 12px;
        border-radius: 15px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
    }

    .timeline-start-point {
      top: 0;
      margin-bottom: 40px;

      &::after {
        content: '';
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0,0,0,0.2);
      }

      span {
        top: -40px;
      }
    }

    .timeline-end-point {
      bottom: 0;
      background: none;
      box-shadow: none;

      .end-dot {
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0,0,0,0.2);
      }
    }

    .timeline-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px 0;
      position: relative;
    }

    .timeline-point {
      width: 20px;
      height: 20px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      border-radius: 50%;
      margin: 0 20px;
      box-shadow: 0 0 0 5px rgba(58, 123, 213, 0.2);
      z-index: 1;
    }

    .timeline-content {
      flex: 0 1 45%;
      padding: 25px;
      background: linear-gradient(135deg,
        rgba(255, 255, 255, 0.95) 0%,
        rgba(255, 255, 255, 0.85) 100%);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      box-shadow:
        0 4px 30px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      cursor: pointer;
      overflow: hidden;
    }

    .timeline-content.expanded {
      transform: translateY(-5px) scale(1.02);
      box-shadow:
        0 8px 30px rgba(0, 0, 0, 0.12),
        0 3px 6px rgba(0, 0, 0, 0.08);
    }

    .content-header {
      transition: all 0.3s ease;
    }

    .expanded-content {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.3s ease;
      margin-top: 0;
    }

    .expanded-content.show {
      max-height: 500px;
      opacity: 1;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .expanded-content h4 {
      color: #2c3e50;
      margin-bottom: 15px;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .expanded-content ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .expanded-content li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 12px;
      color: #576574;
      line-height: 1.6;

      &:before {
        content: '•';
        position: absolute;
        left: 8px;
        color: var(--primary-color);
        font-weight: bold;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .description {
      margin-bottom: 0;
      transition: margin 0.3s ease;
    }

    .expanded .description {
      margin-bottom: 10px;
    }

    .company-logo {
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .period {
      display: inline-block;
      padding: 6px 12px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      color: white;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 12px;
    }

    .timeline-content h3 {
      color: #2c3e50;
      margin: 0 0 8px 0;
      font-size: 1.4rem;
      font-weight: 600;
      background: linear-gradient(45deg, #2c3e50, #3498db);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .place {
      color: #34495e;
      font-weight: 500;
      margin-bottom: 12px;
      font-size: 1.1rem;
    }

    .timeline-content p {
      color: #576574;
      line-height: 1.6;
      margin: 0;
    }

    /* Alternate items layout */
    .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .timeline::before {
        left: 30px;
      }

      .timeline-start-point,
      .timeline-end-point {
        left: 30px;
        transform: none;
      }

      .timeline-item {
        justify-content: flex-start;
        margin-left: 20px;
      }

      .timeline-item:nth-child(even) {
        flex-direction: row;
      }

      .timeline-content {
        flex: 0 1 calc(100% - 70px);
      }

      .timeline-point {
        margin: 0 20px;
      }

      .expanded-content.show {
        max-height: 600px;
      }
    }
  `]
})
export class TimelineComponent {
  timelineItems: TimelineItem[] = [
    {
      period: '2023 - Present',
      institution: 'Tech Solutions Inc.',
      place: 'San Francisco, CA',
      description: 'Senior Software Engineer',
      logoUrl: 'assets/images/companies/tech-solutions-logo.png',
      isPresent: true,
      responsibilities: [
        'Led development of microservices architecture using Node.js and TypeScript',
        'Architected and implemented real-time data processing pipeline handling 1M+ daily transactions',
        'Mentored junior developers and conducted code reviews for team of 8 engineers',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Optimized application performance resulting in 40% improvement in load times'
      ]
    },
    {
      period: '2020 - 2023',
      institution: 'Digital Innovations Corp',
      place: 'New York, NY',
      description: 'Full Stack Developer',
      logoUrl: 'assets/images/companies/digital-innovations-logo.png',
      responsibilities: [
        'Developed and maintained multiple React-based web applications',
        'Implemented authentication system serving 100K+ users',
        'Created reusable component library used across 5 different projects',
        'Optimized database queries reducing response time by 50%',
        'Collaborated with UX team to implement responsive design patterns'
      ]
    },
    {
      period: '2018 - 2020',
      institution: 'StartUp Solutions',
      place: 'Boston, MA',
      description: 'Frontend Developer',
      logoUrl: 'assets/images/companies/startup-solutions-logo.png',
      responsibilities: [
        'Built interactive dashboards using Angular and D3.js',
        'Implemented responsive designs for mobile-first applications',
        'Reduced bundle size by 40% through code splitting and lazy loading',
        'Integrated third-party APIs and payment gateways',
        'Developed automated testing suite with 80% code coverage'
      ]
    },
    {
      period: '2014 - 2018',
      institution: 'Tech University',
      place: 'Seattle, WA',
      description: 'Computer Science',
      logoUrl: 'assets/images/companies/tech-university-logo.png',
      responsibilities: [
        'Bachelor of Science in Computer Science',
        'Specialized in Software Engineering and Web Technologies',
        'Completed capstone project in Machine Learning',
        'President of Computer Science Society',
        'Graduated with Honors - GPA 3.8/4.0'
      ]
    }
  ];

  expandCard(item: TimelineItem) {
    item.isExpanded = true;
  }

  collapseCard(item: TimelineItem) {
    item.isExpanded = false;
  }
}
