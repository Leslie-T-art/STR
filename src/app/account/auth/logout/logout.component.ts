import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  // set the currenr year
  year: number = new Date().getFullYear();

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  /**
 * Logout the user
 */
  logout() {
    // this.store.dispatch(logout());
    // this.authService.logout();
    // if (environment.defaultauth === 'firebase') {
    this.authService.logout();
    // } else {
    //   this.authFackservice.logout();
    // }
    this.router.navigate(['/auth/login']);
  }
}
