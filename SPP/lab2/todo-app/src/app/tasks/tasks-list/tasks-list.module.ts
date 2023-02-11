import { NgModule } from '@angular/core';
import { TaskComponent } from 'src/app/tasks/task/task.component';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [TasksListComponent, TaskComponent],
  exports: [TasksListComponent],
})
export class TasksListModule {}
