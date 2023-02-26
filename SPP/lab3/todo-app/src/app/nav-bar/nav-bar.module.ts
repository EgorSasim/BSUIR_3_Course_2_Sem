import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { SignInModule } from 'src/app/sign-in/sign-in.module';
import { SignUpModule } from 'src/app/sign-up/sign-up.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [SignInModule, SignUpModule, CommonModule, HttpClientModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
