import { Component } from '@angular/core';

// Data Get
import { bootstrapicons } from '../../../core/data/bootstrap';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  icons!: any;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Bootstrap', active: true }
    ];

    setTimeout(() => {
      this.icons = bootstrapicons

      var keys = Object.keys(bootstrapicons);
      this.loadIconList(keys);
    }, 100);

  }

  loadIconList(datas: any) {
    var icons = '';
    var arr = Array.from(datas);
    for (let index = 0; index < arr.length; index++) {
      icons += '<div class="col-xl-3 col-lg-4 col-sm-6">\
       <i class="bi bi-'+ arr[index] + '"></i> ' + arr[index] + '\
       </div>'
    }
    const element: HTMLElement = document.getElementById('iconList1') as HTMLElement
    element.innerHTML = icons
  };
}
