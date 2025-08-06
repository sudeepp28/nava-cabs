import { Component } from '@angular/core';

@Component({
  selector: 'app-outstation',
  standalone: false,
  templateUrl: './outstation.component.html',
  styleUrl: './outstation.component.css'
})
export class OutstationComponent {
  isReturnTrip = false;

  // Form data fields
  pickupCity = '';
  dropCity = '';
  pickupDate = '';
  pickupTime = '';
  ampm = 'AM';
  contact = '';
  returnDate = '';
  vehicle='Sedan – Toyota Etios'

 submitForm() {
  const adminPhone = '919964758999'; // Replace with your WhatsApp number

  let message = `*Outstation Cab Enquiry*\n`;
  message += ` *Pickup City:* ${this.pickupCity}\n`;
  message += ` *Drop City:* ${this.dropCity}\n`;
  message += ` *Pickup Date:* ${this.pickupDate}\n`;
  message += ` *Pickup Time:* ${this.pickupTime} ${this.ampm}\n`;
   message += ` *Selected Vehicle:* ${this.vehicle}\n`;
  message += ` *Contact:* ${this.contact}\n`;

  if (this.isReturnTrip && this.returnDate) {
    message += ` *Return Date:* ${this.returnDate}\n`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  // ✅ Alert user
  alert('Form submitted successfully. Redirecting to WhatsApp.');

  // ✅ Open WhatsApp
  window.open(whatsappUrl, '_blank');

  // ✅ Clear form
  this.pickupCity = '';
  this.dropCity = '';
  this.pickupDate = '';
  this.pickupTime = '';
  this.ampm = 'AM';
  this.contact = '';
  this.returnDate = '';
  this.vehicle='Sedan – Toyota Etios'
  this.isReturnTrip = false;
}

}
