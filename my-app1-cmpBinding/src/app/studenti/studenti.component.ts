import { Component } from '@angular/core';
import { StudenteComponent } from "./studente/studente.component";
import { DUMMY_STUDS } from './DUMMY_STUDS';

@Component({
  selector: 'app-studenti',
  standalone: true,
  imports: [StudenteComponent],
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})
export class StudentiComponent {

  // id:string = "s1";
  // nome: string = "Paolo";
  // cognome: string = "Rossi";

  // id2:string = "s2";
  // nome2:string = "Laura";
  // cognome2: string ="Verdi";

  // studenti = [
  //   {
  //     id: "s1",
  //     nome: "Paolo",
  //     cognome: "Rossi"
  //   },
  //   {
  //     id: "s2",
  //     nome: "Laura",
  //     cognome: "Verdi"
  //   }
  // ]

  studenti = DUMMY_STUDS;

  saluto!: string;

  onSelectStud(info: string){
    console.log("Sono nel parent e stampo la seguente info: " + info);

    this.saluto = "Sono nel parent e stampo la seguente info: " + info;
  }
}
