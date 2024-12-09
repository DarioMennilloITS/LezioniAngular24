import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lez7-two-way-signals',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './lez7-two-way-signals.component.html',
  styleUrl: './lez7-two-way-signals.component.css'
})
export class Lez7TwoWaySignalsComponent {

  nome = signal<string>("");
  cognome = signal("");
  dataNascita = signal("");


  onSubmitForm(){
    console.log(this.nome(), this.cognome(), this.dataNascita());
  }

  onEsempio(){
    this.nome.set("Mario");
    this.cognome.set("Rossi");
    this.dataNascita.set("1990-01-01");
  }
}
