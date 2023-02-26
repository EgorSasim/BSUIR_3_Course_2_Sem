import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MAIN_SERVER_URL } from 'src/app/serverUrls/mainServerUrls';
import { Task, TaskStatus } from 'src/app/tasks/tasks-page/tasks-page.typings';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasksList$: Subject<Task[]> = new Subject();

  public getTasksList(): Promise<Response | void> {
    const queryOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    };
    return fetch(MAIN_SERVER_URL, queryOptions);
  }

  public addTask(task: Task) {
    const queryOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    };
    fetch(MAIN_SERVER_URL + 'add-task', queryOptions).then((resp) =>
      resp.text().then((data) => this.tasksList$.next(JSON.parse(data)))
    );
  }

  public removeTask(id: number) {
    const queryOptions = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    };

    fetch(MAIN_SERVER_URL + 'remove-task', queryOptions).then((resp) =>
      resp.text().then((data) => this.tasksList$.next(JSON.parse(data)))
    );
  }
}
