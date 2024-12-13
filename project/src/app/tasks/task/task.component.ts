import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task!: Task;

  @Output() complete = new EventEmitter<string>();

  onComplete(){
    console.log("Sto per eliminare il task con id", this.task.id);
    this.complete.emit(this.task.id);
  }
}
