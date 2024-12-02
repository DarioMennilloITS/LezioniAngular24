import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ResponsabileComponent } from "./responsabile/responsabile.component";
import { RESPO_DB } from './RESPO_DB';
import { CorsoComponent } from './corsi/corso/corso.component';
import { Responsabile } from './responsabile/responsabile.model';

@Component({
  selector: 'app-lez4-statement',
  standalone: true,
  imports: [NgFor, NgIf, ResponsabileComponent, CorsoComponent],
  templateUrl: './lez4-statement.component.html',
  styleUrl: './lez4-statement.component.css'
})
export class Lez4StatementComponent {
  listaStudenti: string[] = [
    "Paola Verdi",
    "Luca Rossi",
    "Marco Gialli",
    "Gino Gini"
  ]

  listaDocenti: {
    id: string,
    nome: string,
    disponibilita: boolean
  }[] = [
    {
      id: "d1",
      nome: "Dario Mennillo",
      disponibilita: true
    },
    {
      id: "d2",
      nome: "Mauro Bogliaccino",
      disponibilita: true
    },
    {
      id: "d3",
      nome: "Pippo Baudo",
      disponibilita: false
    }
  ]


  listaMaterie: string[] = ["Angular", "Javascript"];

  listaRespoCorso: Responsabile[] = RESPO_DB;
  respoDisponibilita!: string;
  // setto a folse is open
  isClosed: boolean = false;

  onMostraDisponibilita(disponibilita: string){
    // qui riassegno il valore false alla proprietà quando apro il component
    this.respoDisponibilita = disponibilita;
    this.isClosed = false;
  }

  // cambia il valore della proprietà chiamata dal figlio per non reinderizzare il component
  onIsClosed(evento: string){
    console.log(evento);
    
    this.isClosed = true;
  }
}
