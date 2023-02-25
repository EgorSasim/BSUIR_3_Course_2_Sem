import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpForm } from 'src/app/sign-up/sign-up.component.typings';
import { sameValuesValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @Output() public closeModal: EventEmitter<null> = new EventEmitter();
  public signUpForm: FormGroup<SignUpForm> = this.initSignUpForm();

  public submitForm(): void {
    console.log(this.signUpForm);
  }

  private initSignUpForm(): FormGroup<SignUpForm> {
    return new FormGroup(
      {
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        repPassword: new FormControl('', Validators.required),
      },
      sameValuesValidator('password', 'repPassword')
    );
  }
}
