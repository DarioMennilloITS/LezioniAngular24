import { Injectable } from '@angular/core';
import { LISTA_TASKS } from './lista-tasks';
import { type NewTask, type Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = LISTA_TASKS;

  constructor() {
    const tasks = localStorage.getItem("tasks");

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  /**
   * Mi restituisce i task per singolo user
   * @param userId 
   * @returns Task
   */
  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId == userId);
  }

  /**
   * Rimuove un singolo task
   * @param id del task da rimuovere
   */
  removeTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }


  addTask(task: NewTask, userId: string){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });

    this.saveTasks();
  }
}
