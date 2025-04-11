import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-content">
      <section class="gallery-section">
        <h2>{{config.gallery.sectionTitle}}</h2>
        <p class="gallery-description">{{config.gallery.description}}</p>
        <div class="gallery-grid">
          @for (photo of config.gallery.items; track photo.id) {
            <div class="gallery-item"
                 [class.expanded]="photo.isExpanded"
                 (click)="toggleExpand(photo, $event)">
              <img [src]="photo.url" [alt]="photo.caption" loading="lazy">
              <div class="photo-overlay">
                <p class="photo-caption">{{photo.caption}}</p>
                <p class="photo-location">📍 {{photo.location}}</p>
                <p class="photo-date">📅 {{photo.date | date:'mediumDate'}}</p>
                @if (photo.tags?.length) {
                  <div class="photo-tags">
                    @for (tag of photo.tags; track tag) {
                      <span class="tag">{{tag}}</span>
                    }
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  `,
  styles: [`
    .gallery-content {
      min-height: 100%;
      padding: 80px 20px;
      background: var(--background-color);
    }

    .gallery-section {
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: var(--custom-font-color);
      font-size: 2.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .gallery-description {
      text-align: center;
      margin-bottom: 40px;
      color: var(--custom-font-color);
      font-size: 1.1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      opacity: 0.9;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);

      &:hover {
        transform: scale(1.02);

        .photo-overlay {
          opacity: 1;
        }
      }

      &.expanded {
        grid-column: span 2;
        grid-row: span 2;
        z-index: 2;

        @media (max-width: 768px) {
          grid-column: span 1;
          grid-row: span 1;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    .photo-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: linear-gradient(transparent, rgba(0,0,0,0.85));
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .photo-caption {
      font-size: 1.1rem;
      margin-bottom: 8px;
      font-weight: 500;
      color: white;
    }

    .photo-location, .photo-date {
      font-size: 0.9rem;
      margin-bottom: 8px;
      opacity: 0.9;
      color: white;
    }

    .photo-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tag {
      padding: 4px 8px;
      background: var(--primary-color);
      border-radius: 4px;
      font-size: 0.8rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
        padding: 15px;
      }

      h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class GalleryComponent {
  config = this.configService.getConfig();

  constructor(private configService: ConfigService) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    // Close expanded photos when clicking outside
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.gallery-item')) {
      this.config.gallery.items.forEach(photo => photo.isExpanded = false);
    }
  }

  toggleExpand(photo: any, event: MouseEvent) {
    event.stopPropagation(); // Prevent event from bubbling up
    // Close other expanded photos
    this.config.gallery.items.forEach(p => {
      if (p !== photo) p.isExpanded = false;
    });
    photo.isExpanded = !photo.isExpanded;
  }
}

