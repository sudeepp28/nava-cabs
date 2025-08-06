import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutData } from '../../aboutData';

@Component({
  selector: 'app-athird',
  standalone:false,
  templateUrl: './athird.component.html',
  styleUrl: './athird.component.css'
})
export class AthirdComponent {
  data:any=AboutData
  constructor(private router:Router){}
goto(id:string){
  this.router.navigate([`/forms/${id}`])
}
goDettails(id:string){
  this.router.navigate([`/aDetail/${id}`])
}
}
