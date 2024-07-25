import { Component } from '@angular/core';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})
export class MasksComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Input Masks', active: true }];
  }
}
