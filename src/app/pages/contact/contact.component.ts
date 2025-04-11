import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-content">
      <div class="contact-container">
        <h2>Get in Touch</h2>
        <div class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your Email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </div>
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
  `]
})
export class ContactComponent {
}
