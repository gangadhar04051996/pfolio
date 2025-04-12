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
  styleUrls: ['./timeline.component.scss']
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
