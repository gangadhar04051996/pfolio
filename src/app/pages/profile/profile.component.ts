import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TimelineComponent],
  template: `
    <div class="profile-content">
      <section class="timeline-section">
        <h2>{{config.timeline.sectionTitle}}</h2>
        <p class="timeline-description">{{config.timeline.description}}</p>
        <app-timeline></app-timeline>
      </section>
    </div>
  `,
  styles: [`
    .profile-content {
      min-height: 100%;
      padding: 80px 20px;
    }

    section {
      margin-bottom: 40px;
    }

    h2 {
      margin-bottom: 20px;
      text-align: center;
      color: white;
      font-size: 2.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .timeline-description {
      text-align: center;
      margin-bottom: 40px;
      color: white;
      font-size: 1.1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      opacity: 0.9;
    }

    .timeline-item {
      /* existing styles */
    }

    .responsibilities {
      margin-top: 1rem;
      padding-left: 1.5rem;

      li {
        color: var(--responsibilities-color);
        margin-bottom: 0.5rem;
        position: relative;
        list-style-type: none;

        &:before {
          content: "•";
          position: absolute;
          left: -1rem;
          color: var(--secondary-color);
        }
      }
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;

      span {
        background-color: var(--secondary-color);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.9rem;
      }
    }
  `]
})
export class ProfileComponent {
  config = this.configService.getConfig();

  constructor(private configService: ConfigService) {}
}
