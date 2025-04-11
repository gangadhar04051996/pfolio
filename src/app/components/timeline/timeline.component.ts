import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService, TimelineItem } from '../../services/config.service';

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
                @if (item.skills?.length) {
                  <div class="skills">
                    @for (skill of item.skills; track skill) {
                      <span class="skill-tag">{{skill}}</span>
                    }
                  </div>
                }
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
        rgba(58, 123, 213, 0.08) 0%,
        rgba(0, 210, 255, 0.08) 100%);
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
      width: 24px;
      height: 24px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      border-radius: 50%;
      margin: 0 20px;
      box-shadow:
        0 0 0 6px rgba(58, 123, 213, 0.2),
        0 0 0 12px rgba(58, 123, 213, 0.1);
      z-index: 1;
      position: relative;
      transition: all 0.3s ease;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
      }
    }

    .timeline-content {
      flex: 0 1 45%;
      padding: 30px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.1),
        0 1px 8px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, #3a7bd5, #00d2ff);
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow:
          0 20px 40px rgba(0, 0, 0, 0.12),
          0 4px 12px rgba(0, 0, 0, 0.06);
      }
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
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      margin-top: 0;
    }

    .expanded-content.show {
      max-height: 500px;
      opacity: 1;
      margin-top: 20px;
    }

    .expanded-content h4 {
      color: #2c3e50;
      margin-bottom: 20px;
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;

      &::before {
        content: '🎯';
        font-size: 1.3rem;
      }
    }

    .expanded-content ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 12px;
    }

    .expanded-content li {
      position: relative;
      padding-left: 28px;
      color: #576574;
      line-height: 1.6;
      font-size: 1rem;

      &::before {
        content: '✦';
        position: absolute;
        left: 0;
        color: #3a7bd5;
        font-weight: bold;
        font-size: 1.2rem;
      }

      &:hover {
        color: #2c3e50;
        transform: translateX(5px);
        transition: all 0.3s ease;
      }
    }

    .description {
      color: #576574;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .company-logo {
      width: 70px;
      height: 70px;
      margin-bottom: 20px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border: 3px solid white;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .period {
      display: inline-block;
      padding: 8px 16px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      color: white;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      letter-spacing: 0.5px;
    }

    .timeline-content h3 {
      color: #2c3e50;
      margin: 0 0 10px 0;
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(45deg, #2c3e50, #3498db);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 0.5px;
    }

    .place {
      color: #34495e;
      font-weight: 500;
      margin-bottom: 15px;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 6px;

      &::before {
        content: '📍';
        font-size: 1.2rem;
      }
    }

    .timeline-content p {
      color: #576574;
      line-height: 1.6;
      margin: 0;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 15px;
    }

    .skill-tag {
      display: inline-block;
      padding: 6px 12px;
      background-color: var(--secondary-color);
      color: white;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
    }

    .expanded-content {
      h4 {
        margin: 15px 0 10px 0;
        color: var(--title-color);
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 15px;

        li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 20px;

          &:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--secondary-color);
          }
        }
      }
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
        padding: 25px;
      }

      .timeline-point {
        margin: 0 20px;
      }

      .expanded-content.show {
        max-height: 800px;
      }

      .skills {
        margin-top: 20px;
      }
    }
  `]
})
export class TimelineComponent {
  timelineItems: TimelineItem[] = [];

  constructor(private configService: ConfigService) {
    this.timelineItems = this.configService.getConfig().timeline.items;
  }

  expandCard(item: TimelineItem) {
    item.isExpanded = true;
  }

  collapseCard(item: TimelineItem) {
    item.isExpanded = false;
  }
}
