import { Component } from '@angular/core';

@Component({
  selector: 'app-checkboxs-radios',
  templateUrl: './checkboxs-radios.component.html',
  styleUrls: ['./checkboxs-radios.component.scss']
})
export class CheckboxsRadiosComponent {
  type!: boolean
  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Checkboxs & Radios', active: true }];
  }
}
