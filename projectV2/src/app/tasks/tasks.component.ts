import { Component, inject, Input } from '@angular/core';
import { LISTA_TASKS } from './lista-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  private taskService = inject(TasksService);

  @Input({required:true}) userId!: string;
  @Input({required: true}) nomeUser?: string;
  
  isAddingTask: boolean = false;

  get selectedUserTask(){
   return this.taskService.getUserTasks(this.userId);
  }


  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
