import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholders',
  templateUrl: './placeholders.component.html',
  styleUrls: ['./placeholders.component.scss']
})
export class PlaceholdersComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Placeholders', active: true }];
  }
}
