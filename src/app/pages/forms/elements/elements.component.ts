import { Component } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Elements', active: true }
    ];
  }
}
