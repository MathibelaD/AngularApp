import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private TitleService: Title) {
    this.TitleService.setTitle('Ms Mathibela');
    emailjs.init(environment.emailjs.publicKey);
  }

  messageSent = false;
  isSubmitting = false;
  errorMessage = '';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  async sendEmail(): Promise<void> {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.errorMessage = '';

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message
        }
      );
      this.messageSent = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
    } catch {
      this.errorMessage = 'Something went wrong. Please email directly at mathibeladineo1@gmail.com';
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm(): void {
    this.messageSent = false;
    this.errorMessage = '';
  }
}
