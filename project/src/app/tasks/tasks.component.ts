import { Component, Input } from '@angular/core';
import { LISTA_TASKS } from './lista-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = LISTA_TASKS;

  @Input({required:true}) userId!: string;
  @Input({required: true}) nomeUser?: string;
  
  isAddingTask: boolean = false;

  get selectedUserTask(){
   return this.tasks.filter((task) => (task.userId === this.userId))
  }

  onCompletedTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }


  onStartAddTask(){
    this.isAddingTask = true;
  }

}
