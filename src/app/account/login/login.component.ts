import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { login, signInWithFacebook, signInWithGoogle } from 'src/app/store/actions/authentication.actions';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;

  toast!: false;;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: UntypedFormBuilder, private store: Store, private router: Router, private route: ActivatedRoute, private AuthenticationService: AuthenticationService) {
    // redirect to home if already logged in
    // this.store.select(state => state.Authentication).subscribe(authState => {
    //   this.isLoggedIn = !!authState.user;
    //   this.currentUser = authState.user;
    // });

    if (this.AuthenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  signInWithFacebook() {
    this.AuthenticationService.signInWithFacebook().then(user => {
      // Handle successful sign-in
      this.store.dispatch(signInWithFacebook({ user }));
    })
      .catch(error => {
        // Handle sign-in error
        console.error('Sign-in error:', error);
      });
  }

  signInWithGoogle() {
    this.AuthenticationService.signInWithGoogle().then(user => {
      this.store.dispatch(signInWithGoogle({ user }));
    })
      .catch(error => {
        // Handle sign-out error
        console.error('Sign-out error:', error);
      });
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    const email = this.f['email'].value; // Get the username from the form
    const password = this.f['password'].value; // Get the password from the form

    // Login Api
    this.store.dispatch(login({ email: email, password: password }));
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
