import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit() {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Alerts', active: true }
    ];
  }

  alerts: any = [];

  showalert(): void {
    this.alerts.push({
      type: 'success alert-outline alert-border-left alert-modern alert-label-icon label-arrow alert-top-border',
      msg: `Nice, you triggered this alert message!`,
      timeout: 5000,
      class: "alert,alert-outline"
    });
  }

}
