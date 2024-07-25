import { Component } from '@angular/core';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent {
  // set the currenr year
  year: number = new Date().getFullYear();
}
