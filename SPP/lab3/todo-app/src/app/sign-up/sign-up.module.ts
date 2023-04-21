import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignUpComponent],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
