import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Buttons', active: true }];
  }
  // Follow Unfollow custom Toggle
  togglebtn(event: any) {
    var followbtn = event.target.closest('.custom-toggle') as any;
    if (followbtn.classList.contains("active")) {
      followbtn.classList.remove('active')
    } else {
      followbtn.classList.add('active')
    }
  }
}
