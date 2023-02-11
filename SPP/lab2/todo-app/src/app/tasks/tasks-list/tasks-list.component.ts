import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/tasks/task.service';
import { Task } from 'src/app/tasks/tasks-page/tasks-page.typings';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  @Input() tasksList?: Task[] = this.taskService.getTasksList();

  constructor(private taskService: TaskService) {}
}
