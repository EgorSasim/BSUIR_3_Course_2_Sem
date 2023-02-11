import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TaskComponent } from 'src/app/tasks/task/task.component';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks-page', pathMatch: 'full' },
  { path: 'tasks-page', component: TasksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
