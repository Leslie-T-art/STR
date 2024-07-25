import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;
  isDropup = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Dropdowns', active: true }];
  }
}
