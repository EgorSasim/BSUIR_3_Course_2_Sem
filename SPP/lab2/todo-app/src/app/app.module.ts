import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TasksPageModule } from 'src/app/tasks/tasks-page/tasks-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TasksPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
