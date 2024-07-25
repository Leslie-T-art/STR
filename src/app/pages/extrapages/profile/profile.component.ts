import { Component } from '@angular/core';

// Data Get
import { profileprojectList } from '../../../core/data/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

// Profile Component
export class ProfileComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  projectdata: any;

  ngOnInit(): void {

    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Pages', active: true },
      { label: 'Profile', active: true }
    ];

    // Fetch data
    this.projectdata = profileprojectList
  }
}
