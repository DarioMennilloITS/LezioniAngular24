import { Component } from '@angular/core';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})
export class StudentiComponent {

  studenti: string[] = [
    "Paola",
    "Dario",
    "Luisa",
    "Luca",
    "Laura"
  ];

  onCaricaStudenti(){
   
  }

}
