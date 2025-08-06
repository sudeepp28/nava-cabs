import { Component } from '@angular/core';

@Component({
  selector: 'app-car-rental',
  standalone: false,
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent {
  city = '';
  pickup = '';
  date = '';
  time = '';
  ampm = 'AM';
  phone = '';
  vehicle='Sedan – Toyota Etios'

  submitForm() {
    const message = `*Car Rental Enquiry*:
*City*: ${this.city}
*Pick-Up Location*: ${this.pickup}
*Date*: ${this.date}
*Time*: ${this.time} ${this.ampm}
*Contact*: ${this.phone}
*selected Vehicle*: ${this.vehicle}`;

    const adminPhone = '919964758999'; // Your admin WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    alert('Form submitted successfully. Redirecting to WhatsApp.');
    window.open(whatsappUrl, '_blank');

    // Clear form after submission
    this.city = '';
    this.pickup = '';
    this.date = '';
    this.time = '';
    this.ampm = 'AM';
    this.phone = '';
    this.vehicle='Sedan – Toyota Etios'
  }
}
