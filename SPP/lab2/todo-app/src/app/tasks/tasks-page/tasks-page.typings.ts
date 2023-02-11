import { FormControl } from '@angular/forms';

export interface TasksForm {
  name: FormControl<string>;
  completionTime: FormControl<Date>;
  status: FormControl<TaskStatus>;
}

export enum TaskStatus {
  ToDo = 'To do',
  InProgress = 'In progress',
  Done = 'Done',
  NoStatus = 'No status',
}
