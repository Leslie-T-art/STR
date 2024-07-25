import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Offcanvas', active: true }];
  }

  openOffcanvas() {
    document.querySelector('.default')?.classList.add('show')
    document.getElementById('backdrop2')?.classList.add('show')
  }

  closeoffcanvas() {
    document.querySelector('.default')?.classList.remove('show')
    document.getElementById('backdrop2')?.classList.remove('show')
  }
}
