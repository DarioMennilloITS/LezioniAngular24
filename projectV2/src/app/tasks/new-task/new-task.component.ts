import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  private tasksService = inject(TasksService);

  enteredTitle!: string;
  enteredSummary!: string;
  enteredDate!: string;
  
  isInvalid: boolean = false;

  onClose() {
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
      },
      this.userId
    )

    this.onClose();
  }
    
}
