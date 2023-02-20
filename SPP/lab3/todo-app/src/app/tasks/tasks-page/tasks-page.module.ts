import { NgModule } from '@angular/core';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';
import { TasksListModule } from 'src/app/tasks/tasks-list/tasks-list.module';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [TasksListModule, ReactiveFormsModule],
  exports: [TasksPageComponent],
})
export class TasksPageModule {}
