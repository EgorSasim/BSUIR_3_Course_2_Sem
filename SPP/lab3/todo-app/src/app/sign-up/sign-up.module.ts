import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
