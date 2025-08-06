import { Component } from '@angular/core';

@Component({
  selector: 'app-city-rides',
  standalone: false,
  templateUrl: './city-rides.component.html',
  styleUrls: ['./city-rides.component.css']
})
export class CityRidesComponent {
  pickup = '';
  drop = '';
  date = '';
  time = '';
  ampm = 'AM';
  phone = '';

  submitForm() {
  const message = `City Ride Enquiry:
Pickup: ${this.pickup}
Drop: ${this.drop}
Date: ${this.date}
Time: ${this.time} ${this.ampm}
Contact: ${this.phone}`;

  const adminPhone = '919964758999'; // ✅ No '+'
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  alert('Form submitted successfully. Redirecting to WhatsApp.');
  window.open(whatsappUrl, '_blank');

  // Clear form
  this.pickup = '';
  this.drop = '';
  this.date = '';
  this.time = '';
  this.ampm = 'AM';
  this.phone = '';
}
}
