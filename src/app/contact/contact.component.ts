import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private TitleService: Title) {
    this.TitleService.setTitle("Ms Mathibela")
  }
  formData: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail(): void {
    const emailSubject = encodeURIComponent(this.formData.subject);
    const emailBody = encodeURIComponent(`Name: ${this.formData.name}%0D%0AEmail: ${this.formData.email}%0D%0ASubject: ${this.formData.subject}%0D%0AMessage: ${this.formData.message}`);

    window.location.href = `mailto:mathibeladineo1@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  }
}
