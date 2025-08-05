import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athird',
  standalone:false,
  templateUrl: './athird.component.html',
  styleUrl: './athird.component.css'
})
export class AthirdComponent {
  constructor(private router:Router){}
goto(id:string){
  this.router.navigate([`/forms/${id}`])
}
}
