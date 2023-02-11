import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import {
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

  public addTask(): void {
    console.log(this.tasks.controls);
  }

  private initTasks(): FormGroup<TasksForm> {
    return new FormGroup<TasksForm>({
      name: new FormControl(),
      completionTime: new FormControl(),
      status: new FormControl<TaskStatus>(TaskStatus.NoStatus, {
        nonNullable: true,
      }),
    });
  }
}
