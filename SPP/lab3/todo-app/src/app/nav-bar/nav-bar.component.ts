import { Component } from '@angular/core';
import { NabBarService } from 'src/app/nav-bar/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public isVisibleSignIn: boolean = false;
  public isVisibleSignUp: boolean = false;

  constructor(private navBarService: NabBarService) {}

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

  public getSecret() {
    this.navBarService.getSecret();
  }
}
