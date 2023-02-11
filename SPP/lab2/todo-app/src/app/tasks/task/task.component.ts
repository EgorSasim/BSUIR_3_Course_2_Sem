import { Component, Input } from '@angular/core';
import { TaskStatus } from 'src/app/tasks/tasks-page/tasks-page.typings';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public status?: TaskStatus;
}
