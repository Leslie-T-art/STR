import { Component } from '@angular/core';

@Component({
  selector: 'app-success-msg',
  templateUrl: './success-msg.component.html',
  styleUrls: ['./success-msg.component.scss']
})
export class SuccessMsgComponent {
// set the currenr year
year: number = new Date().getFullYear();
}
