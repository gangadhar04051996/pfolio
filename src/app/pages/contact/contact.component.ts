import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="contact-content">
      <div class="contact-container">
        <h2>Get in Touch</h2>
        <form class="contact-form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="formData.name"
              #name="ngModel"
              required
              placeholder="Your Name">
            <span class="error-message" *ngIf="name.invalid && (name.dirty || name.touched)">
              Name is required
            </span>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              #email="ngModel"
              required
              email
              placeholder="Your Email">
            <span class="error-message" *ngIf="email.invalid && (email.dirty || email.touched)">
              Valid email is required
            </span>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              [(ngModel)]="formData.message"
              #message="ngModel"
              required
              rows="5"
              placeholder="Your Message"></textarea>
            <span class="error-message" *ngIf="message.invalid && (message.dirty || message.touched)">
              Message is required
            </span>
          </div>
          <button type="submit" class="submit-btn" [disabled]="contactForm.invalid">
            Send Message
          </button>
        </form>
      </div>
    </div>

    <!-- Success Popup -->
    <div class="popup" *ngIf="showPopup" [@fadeInOut]>
      <div class="popup-content">
        <p>I got your message, I'll get back to you Soon!</p>
      </div>
    </div>
  `,
  styles: [`
    .contact-content {
      min-height: 100%;
      padding: 80px 20px;
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

      label {
        display: block;
        color: white;
        margin-bottom: 8px;
        font-weight: 500;
      }

      input, textarea {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.9);
        color: #2c3e50;
        font-size: 1rem;

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px #3a7bd5;
        }
      }
    }

    .submit-btn {
      width: 100%;
      padding: 12px;
      background: linear-gradient(45deg, #3a7bd5, #00d2ff);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    @media (max-width: 768px) {
      .contact-content {
        padding: 40px 20px;
      }

      h2 {
        font-size: 2rem;
      }
    }

    .error-message {
      color: #ff4444;
      font-size: 0.8rem;
      margin-top: 4px;
      display: block;
    }

    .popup {
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 200, 0, 0.9);
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .popup-content {
      font-size: 1rem;
      font-weight: 500;
    }

    input.ng-invalid.ng-touched,
    textarea.ng-invalid.ng-touched {
      border: 1px solid #ff4444;
    }

    button[disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  showPopup = false;

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.sendMessage(this.formData).subscribe({
        next: () => {
          this.showPopup = true;
          form.resetForm();
          setTimeout(() => {
            this.showPopup = false;
          }, 3000);
        },
        error: (error: Error) => {
          console.error('Error sending message:', error);
          // Handle error case
        }
      });
    }
  }
}
