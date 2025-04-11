import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private formspreeUrl = 'https://formspree.io/f/xyzelawj';
  private formspreeUrl = 'https://submit-form.com/xBfKk82np';

  constructor(private http: HttpClient) {}

  sendMessage(formData: any) {
    return this.http.post(this.formspreeUrl, formData);
  }
}
