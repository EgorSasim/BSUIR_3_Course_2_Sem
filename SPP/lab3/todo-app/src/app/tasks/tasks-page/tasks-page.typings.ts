import { FormControl } from '@angular/forms';

export interface TasksForm {
  name: FormControl<string>;
  status: FormControl<TaskStatus>;
  completionTime: FormControl<Date>;
}

export enum TaskStatus {
  ToDo = 'To do',
  InProgress = 'In progress',
  Done = 'Done',
  NoStatus = 'No status',
}

export interface Task {
  id: number;
  name: string;
  status: TaskStatus;
  completionTime: Date;
}

export enum TaskValidityErr {
  NoName,
  NoErr,
}
