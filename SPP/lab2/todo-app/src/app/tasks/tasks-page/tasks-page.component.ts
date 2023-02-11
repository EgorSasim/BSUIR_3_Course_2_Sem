import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { TaskService } from 'src/app/tasks/task.service';
import {
  Task,
  TasksForm,
  TaskStatus,
} from 'src/app/tasks/tasks-page/tasks-page.typings';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
})
export class TasksPageComponent {
  public tasks: FormGroup<TasksForm> = this.initTasks();
  public taskStatus?: TaskStatus;

  constructor(private taskService: TaskService) {}

  public addTask(): void {
    this.taskService.addTask(this.tasks.value as Task);
  }

  private initTasks(): FormGroup<TasksForm> {
    return new FormGroup<TasksForm>({
      name: new FormControl(),
      completionTime: new FormControl(),
      status: new FormControl(TaskStatus.NoStatus),
    });
  }
}
