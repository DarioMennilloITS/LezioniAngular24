import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle!: string;
  enteredSummary!: string;
  enteredDate!: string;
  
  isInvalid: boolean = false;

  onClose() {
    this.close.emit();
  }

  onSubmit(){
    console.log("Sto inserendo un nuovo Task: ", this.enteredTitle, this.enteredDate, this.enteredSummary);
    
    if(this.enteredTitle == undefined || this.enteredSummary == undefined || this.enteredDate == undefined){
      // faremo comparire degli avvisi
      this.isInvalid = true;

    }
    else{
      //emetto un nuovo task
      this.add.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate

      })

      // this.onClose();
    }
    
  } 
}
