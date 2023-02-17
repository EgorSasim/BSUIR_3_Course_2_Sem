import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { TaskService } from 'src/app/tasks/task.service';
import {
  Task,
  TasksForm,
  TaskStatus,
  TaskValidityErr,
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
    this.checkTaskValidity() === TaskValidityErr.NoName
      ? this.showErrorToast(TaskValidityErr.NoName)
      : this.taskService.addTask(this.tasks.value as Task);
  }

  private initTasks(): FormGroup<TasksForm> {
    return new FormGroup<TasksForm>({
      name: new FormControl(),
      completionTime: new FormControl(),
      status: new FormControl(TaskStatus.NoStatus),
    });
  }

  private checkTaskValidity(): TaskValidityErr {
    return this.tasks.value.name
      ? TaskValidityErr.NoErr
      : TaskValidityErr.NoName;
  }

  private showErrorToast(err: TaskValidityErr): void {
    switch (err) {
      case TaskValidityErr.NoName:
        alert('Please, provide task name');
        break;
      default:
        return;
    }
  }
}
