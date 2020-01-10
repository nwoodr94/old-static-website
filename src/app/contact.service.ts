import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact/contact/contact-model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private postURL = 'http://localhost:8000/';

  post(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.postURL, contact, this.httpOptions);
  }

}
