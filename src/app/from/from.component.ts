import { Component } from '@angular/core';

@Component({
  selector: 'app-from',
  standalone:false,
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {
 activeForm: string = 'outstation';

  selectForm(formName: string) {
    this.activeForm = formName;
  }
}
