import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  submissionStatus: string = '';

  submitForm() {
    if (
      this.contactForm.name === '' &&
      this.contactForm.email === '' &&
      this.contactForm.message === ''
    ) {
      this.submissionStatus = 'Please Enter the Fields!!';
      setTimeout(() => {
        this.submissionStatus = '';
      }, 5000);
    } else {
      this.submissionStatus = 'Submitted successfully!';
      setTimeout(() => {
        this.submissionStatus = '';
      }, 5000);
      this.contactForm = {
        name: '',
        email: '',
        message: '',
      };
    }
  }
  isFormValid() {
    return (
      this.contactForm.name !== '' &&
      this.contactForm.email !== '' &&
      this.contactForm.message !== ''
    );
  }
}
