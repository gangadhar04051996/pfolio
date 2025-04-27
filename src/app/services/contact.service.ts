import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private formspreeUrl = 'https://submit-form.com/xBfKk82np';

  constructor(private http: HttpClient) {}

  sendMessage(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.formspreeUrl, formData, { headers });
  }
}
