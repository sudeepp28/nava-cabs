import { Component } from '@angular/core';

@Component({
  selector: 'app-outstation',
  standalone:false,
  templateUrl: './outstation.component.html',
  styleUrl: './outstation.component.css'
})
export class OutstationComponent {
isReturnTrip = false;
return(){
  this.isReturnTrip=!this.isReturnTrip
}
}
