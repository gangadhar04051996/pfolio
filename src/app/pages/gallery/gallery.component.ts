import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigService, GalleryPhoto } from '../../services/config.service';
import { PageLayoutComponent } from '../../shared/layout/page-layout.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, PageLayoutComponent],
  template: `
    <app-page-layout>
      <div class="gallery-content">
        <section class="gallery-section">
          <h2>{{config.gallery.sectionTitle}}</h2>
          <p class="gallery-description">{{config.gallery.description}}</p>
          <div class="gallery-grid" #galleryGrid>
            @for (photo of visiblePhotos; track photo.id) {
              <div class="gallery-item"
                   [class.expanded]="photo.isExpanded"
                   [class.landscape]="photo.isLandscape"
                   [class.portrait]="!photo.isLandscape"
                   (click)="toggleExpand(photo, $event)">
                <img [src]="photo.url"
                     [alt]="photo.caption"
                     loading="lazy"
                     (load)="onImageLoad($event, photo)">
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
          @if (hasMorePhotos) {
            <div class="load-more-container">
              <button class="load-more-btn" (click)="loadMorePhotos()">
                Load More Photos
              </button>
            </div>
          }
        </section>
      </div>
    </app-page-layout>
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
      color: var(--custom-font-color);  /* Changed from --title-color */
      font-size: 2.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* Enhanced shadow for better visibility */
      font-weight: 600;
      position: relative;
      z-index: 1;  /* Ensure text stays above background */
    }

    .gallery-description {
      text-align: center;
      margin-bottom: 40px;
      color: var(--custom-font-color);  /* Ensure consistent color with title */
      font-size: 1.1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      opacity: 0.9;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);  /* Subtle shadow for better readability */
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
      grid-auto-flow: dense; /* This helps fill gaps */
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);

      &.landscape {
        grid-column: span 2;
        aspect-ratio: 16/9;

        @media (max-width: 768px) {
          grid-column: span 1;
        }
      }

      &.portrait {
        grid-row: span 2;
        aspect-ratio: 3/4;
      }

      &:hover {
        transform: scale(1.02);

        .photo-overlay {
          opacity: 1;
        }
      }

      &.expanded {
        z-index: 2;

        &.landscape {
          grid-column: span 2;
          grid-row: span 2;
        }

        &.portrait {
          grid-column: span 2;
          grid-row: span 2;
        }

        @media (max-width: 768px) {
          grid-column: span 1 !important;
          grid-row: span 1 !important;
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

    .load-more-container {
      text-align: center;
      margin: 20px 0;
      padding: 20px;
    }

    .load-more-btn {
      padding: 12px 24px;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }

      &:active {
        transform: translateY(0);
      }
    }
  `]
})
export class GalleryComponent implements OnInit {
  config = this.configService.getConfig();
  allPhotos: (GalleryPhoto & { isLandscape?: boolean })[] = [];
  visiblePhotos: (GalleryPhoto & { isLandscape?: boolean })[] = [];
  private readonly photosPerPage = 6;
  private currentPage = 1;

  constructor(private configService: ConfigService) {}

  get hasMorePhotos(): boolean {
    return this.visiblePhotos.length < this.allPhotos.length;
  }

  ngOnInit() {
    // Create a new array and sort it by date
    this.allPhotos = [...this.config.gallery.items]
      .sort((a, b) => {
        // Convert string dates to timestamps for comparison
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        // Log the dates for debugging
        console.log(`Comparing: ${a.date} (${dateA}) vs ${b.date} (${dateB})`);

        return dateB - dateA; // Descending order (newest first)
      });

    // Log the sorted array for verification
    console.log('Sorted photos:', this.allPhotos.map(photo => ({
      caption: photo.caption,
      date: photo.date
    })));

    // Load initial batch of photos
    this.loadMorePhotos();
  }

  loadMorePhotos(): void {
    const startIndex = (this.currentPage - 1) * this.photosPerPage;
    const endIndex = startIndex + this.photosPerPage;

    const newPhotos = this.allPhotos.slice(startIndex, endIndex);
    this.visiblePhotos = [...this.visiblePhotos, ...newPhotos];
    this.currentPage++;
  }

  onImageLoad(event: Event, photo: any) {
    const img = event.target as HTMLImageElement;
    photo.isLandscape = img.naturalWidth > img.naturalHeight;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.gallery-item')) {
      this.visiblePhotos.forEach(photo => photo.isExpanded = false);
    }
  }

  toggleExpand(photo: any, event: MouseEvent) {
    event.stopPropagation();
    this.visiblePhotos.forEach(p => {
      if (p !== photo) p.isExpanded = false;
    });
    photo.isExpanded = !photo.isExpanded;
  }
}







