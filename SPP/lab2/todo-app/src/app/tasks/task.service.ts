import { Injectable } from '@angular/core';
import { Task, TaskStatus } from 'src/app/tasks/tasks-page/tasks-page.typings';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public TASKS: Task[] = [
    {
      id: 1,
      name: 'wash the car',
      status: TaskStatus.ToDo,
      completionTime: new Date(),
    },
    {
      id: 2,
      name: 'buy flowers',
      status: TaskStatus.NoStatus,
      completionTime: new Date(),
    },
    {
      id: 3,
      name: 'fix bug',
      status: TaskStatus.Done,
      completionTime: new Date(),
    },
  ];

  public addTask(task: Task) {
    task.id = Math.floor(Math.random() * 1000) + 3;
    this.TASKS.push(task);
    console.log(this.TASKS);
  }

  public getTasksList(): Task[] {
    return this.TASKS;
  }

  public removeTask(id: number) {
    this.TASKS.splice(
      this.TASKS.findIndex((task) => task.id === id),
      1
    );
  }
}
