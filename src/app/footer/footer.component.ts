import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
 standalone:false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 email: string = 'navacabservice@gmail.com';
Registered_Office='SHIVAKRUPA 129/1, 5TH Cross Rd, Kengeri, Bengaluru, Karnataka 560060.'
chamberNo='103, Civil Court, Bahadurgarh, Distt. Jhajjar, Haryana-124507.'
gurugramOffice='Office no. 518, Deep Complex, Civil Lines, Oppo. Distt. Court,Gurugram, Haryana-1220011'

date=new Date()
year=this.date.getFullYear()

below=`@${this.year} Nava Cabs Service.  All Rights Reserved`
adminPhone1: string = ' 9964758999'
adminPhone2: string = '9916788688'
}


