import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css'
})
export class CorsoComponent {
  @Input({required: true}) disponibilita!: string;

  @Output() isClosed = new EventEmitter();

  onIsClosed(){
    this.isClosed.emit(this.isClosed);
  }
}
