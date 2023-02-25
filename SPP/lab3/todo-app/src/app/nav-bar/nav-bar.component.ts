import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public isVisibleSignIn: boolean = false;
  public isVisibleSignUp: boolean = false;

  public showSignInModal(): void {
    this.isVisibleSignIn = true;
  }

  public showSignUpModal(): void {
    this.isVisibleSignUp = true;
  }

  public hideSignInModal(): void {
    this.isVisibleSignIn = false;
  }

  public hideSignUpModal(): void {
    this.isVisibleSignUp = false;
  }
}
