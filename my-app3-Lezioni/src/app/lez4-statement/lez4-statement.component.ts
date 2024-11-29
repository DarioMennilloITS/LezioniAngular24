import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Responsabile } from './responsabile/responsabile.model';
import { ResponsabileComponent } from "./responsabile/responsabile.component";
import { RESPO_DB } from './RESPO_DB';

@Component({
  selector: 'app-lez4-statement',
  standalone: true,
  imports: [NgFor, NgIf, ResponsabileComponent],
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

}
