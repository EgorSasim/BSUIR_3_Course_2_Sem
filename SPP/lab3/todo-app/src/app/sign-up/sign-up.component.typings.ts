import { FormControl } from '@angular/forms';

export interface SignUpForm {
  login: FormControl<string>;
  password: FormControl<string>;
  repPassword: FormControl<string>;
}
