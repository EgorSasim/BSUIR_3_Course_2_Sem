import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/tasks/task.service';
import { Task } from 'src/app/tasks/tasks-page/tasks-page.typings';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public task?: Task;

  constructor(private taskService: TaskService) {}
  public deleteTask(id: number): void {
    this.taskService.removeTask(id);
  }
}
