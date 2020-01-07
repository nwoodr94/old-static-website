import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  contact = new Contact()

  submit(name, company, email, message) {

    if (name == "" 
        || company == ""
        || email == "" 
        || message == ""){
      this.contact.validated = false;
      return;
    } 
    else {
      this.contact.name = name;
      this.contact.company = company;
      this.contact.email = email;
      this.contact.message = message;


      console.log(this.contact);
    }

    
  }

}