import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TimelineComponent],
  template: `
    <div class="profile-content">
      <section class="timeline-section">
        <h2>My Journey</h2>
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
      margin-bottom: 40px;
      text-align: center;
      color: white;
      font-size: 2.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `]
})
export class ProfileComponent {}
