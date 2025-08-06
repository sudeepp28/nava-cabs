import { Component } from '@angular/core';

@Component({
  selector: 'app-airport-taxi',
 standalone:false,
  templateUrl: './airport-taxi.component.html',
  styleUrl: './airport-taxi.component.css'
})
export class AirportTaxiComponent {
 pickup = '';
  drop = '';
  date = '';
  time = '';
  ampm = 'AM';
  phone = '';
  trip='Pick up from Airport';
  vehicle='Sedan – Toyota Etios';
  Terminal='Terminal 1'

  submitForm() {
  const message = `*Airport Taxi Booking Enquiry*:
*Trip*: ${this.trip}
*Address*:${this.pickup}
*Terminal*: ${this.Terminal}
*Date*: ${this.date}
*Pick-Up Time*: ${this.time} ${this.ampm}
*Selected Vehicle*: ${this.vehicle}
*Contact*: ${this.phone}`;

  const adminPhone = '919964758999'; // ✅ No '+'
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  alert('Form submitted successfully. Redirecting to WhatsApp.');
  window.open(whatsappUrl, '_blank');

  // Clear form
  
   this. trip='Pick up from Airport';
   this.pickup = '';
  this.date = '';
  this.time = '';
  this.ampm = 'AM';
  this.phone = '';
  this.vehicle='Sedan – Toyota Etios';
  this.Terminal='Terminal 1'
 
}
}
