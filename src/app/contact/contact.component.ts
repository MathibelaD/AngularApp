import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private TitleService: Title) {
    this.TitleService.setTitle("Ms Mathibela");
  }

  messageSent = false;

  formData: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail(): void {
    const emailSubject = encodeURIComponent(this.formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${this.formData.name}\r\nEmail: ${this.formData.email}\r\nSubject: ${this.formData.subject}\r\nMessage: ${this.formData.message}`
    );
    window.location.href = `mailto:mathibeladineo1@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    this.messageSent = true;
    this.formData = { name: '', email: '', subject: '', message: '' };
  }

  resetForm(): void {
    this.messageSent = false;
  }
}
