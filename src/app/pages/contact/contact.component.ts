import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';
import { PageLayoutComponent } from '../../shared/layout/page-layout.component';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    PageLayoutComponent
  ],
  providers: [ContactService],
  template: `
    <app-page-layout>
      <div class="contact-content">
        <div class="contact-container">
          <h2>Let's Connect</h2>
          <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" novalidate>
            <div class="form-group">
              <input
                type="text"
                name="name"
                [(ngModel)]="formData.name"
                required
                placeholder="Your Name"
                #name="ngModel"
                [class.invalid]="name.invalid && (name.dirty || name.touched)">
              <span class="error-message" *ngIf="name.invalid && (name.dirty || name.touched)">Name is required</span>
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                email
                placeholder="Your Email"
                #email="ngModel"
                [class.invalid]="email.invalid && (email.dirty || email.touched)">
              <span class="error-message" *ngIf="email.invalid && (email.dirty || email.touched)">
                Please enter a valid email address
              </span>
            </div>
            <div class="form-group">
              <textarea
                name="message"
                [(ngModel)]="formData.message"
                required
                placeholder="Your Message"
                #message="ngModel"
                [class.invalid]="message.invalid && (message.dirty || message.touched)"></textarea>
              <span class="error-message" *ngIf="message.invalid && (message.dirty || message.touched)">
                Message is required
              </span>
            </div>
            <button type="submit" [disabled]="!contactForm.valid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Success/Error Popup -->
        <div class="popup" *ngIf="showPopup" [@fadeInOut]>
          <div class="popup-content" [ngClass]="{'success': !isError, 'error': isError}">
            <p>{{ popupMessage }}</p>
          </div>
        </div>
      </div>
    </app-page-layout>
  `,
  styles: [`
    .contact-content {
      min-height: 100vh;
      padding: 120px 20px; /* Increased top padding to account for fixed header */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contact-container {
      max-width: 600px;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      margin: auto; /* Added margin auto */
    }

    h2 {
      color: white;
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .form-group {
      margin-bottom: 20px;
      position: relative;
    }

    input, textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid transparent;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.9);
      color: #2c3e50;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #3a7bd5;
        box-shadow: 0 0 0 2px rgba(58, 123, 213, 0.2);
      }

      &.invalid {
        border-color: #ff4444;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }

    .error-message {
      color: #ff4444;
      font-size: 0.8rem;
      margin-top: 4px;
      display: block;
      position: absolute;
      bottom: -20px;
    }

    button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .popup {
      position: fixed;
      left: 50%;
      bottom: 40px; /* Position from bottom */
      transform: translateX(-50%);
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      z-index: 1100; /* Ensure it's above other content */
      min-width: 300px;
      max-width: 90%;
      text-align: center;
    }

    .popup-content {
      font-size: 1rem;
      font-weight: 500;
      padding: 10px;
      border-radius: 6px;
    }

    .popup-content.success {
      background: rgba(40, 167, 69, 0.95);
      color: white;
    }

    .popup-content.error {
      background: rgba(220, 53, 69, 0.95);
      color: white;
    }

    @media (max-width: 768px) {
      .contact-content {
        padding: 100px 20px 40px; /* Adjusted padding for mobile */
      }

      .contact-container {
        padding: 30px;
        margin: 0 auto; /* Ensure center alignment on mobile */
      }

      h2 {
        font-size: 2rem;
      }

      .popup {
        bottom: 20px;
        min-width: auto;
        width: 90%;
        margin: 0 auto;
      }
    }
  `],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-50%, 20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translate(-50%, 0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translate(-50%, 20px)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  showPopup = false;
  isSubmitting = false;
  isError = false;
  popupMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      // Create a copy of the form data
      const formDataCopy = { ...this.formData };

      this.contactService.sendMessage(formDataCopy).subscribe({
        next: () => {
          this.isError = false;
          this.popupMessage = "Thank you! I'll get back to you soon!";
          this.showPopup = true;

          // Reset the form and formData
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
          form.resetForm();

          setTimeout(() => {
            this.showPopup = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error sending message:', error);
          this.isError = true;
          this.popupMessage = "Sorry, there was an error sending your message. Please try again.";
          this.showPopup = true;

          setTimeout(() => {
            this.showPopup = false;
          }, 3000);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
