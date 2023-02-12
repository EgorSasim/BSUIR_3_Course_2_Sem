import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/tasks/task.service';
import { Task } from 'src/app/tasks/tasks-page/tasks-page.typings';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  public tasksList?: Task[];

  constructor(private taskService: TaskService) {
    this.taskService
      .getTasksList()
      .then((data: Response) =>
        data
          .text()
          .then((tasksList) => (this.tasksList = JSON.parse(tasksList)))
      );
    this.taskService.tasksList$.subscribe(
      (tasksList) => (this.tasksList = tasksList)
    );
  }
}
