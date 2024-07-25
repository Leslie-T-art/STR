import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Media', active: true }];
  }
}
