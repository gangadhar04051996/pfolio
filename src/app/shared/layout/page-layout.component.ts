import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleBackgroundComponent } from '../particle-background/particle-background.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, ParticleBackgroundComponent],
  template: `
    <div class="page-container">
      <app-particle-background></app-particle-background>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      position: relative;
      min-height: 100vh;
      width: 100%;
      background: var(--background-color);
    }

    .content {
      position: relative;
      z-index: 2;
    }
  `]
})
export class PageLayoutComponent {}