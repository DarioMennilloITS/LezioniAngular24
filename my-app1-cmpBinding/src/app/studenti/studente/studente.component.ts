import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [],
  templateUrl: './studente.component.html',
  styleUrl: './studente.component.css'
})
export class StudenteComponent {

  //ATT: quando uso il @Input() importo dall'angular core.
  //CReo una Custom Property
  //Stabilisco che la prop marcata con @Input() venga ricevuta dal component tramite il parent
  @Input() id!: string;
  
  @Input({required: true}) nome!:string;
  
  //Questo required: true è un configuration object che mi impone di specificare le prop così dettagliate
  @Input({required:true}) cognome!:string;

  //Per esercizio:
  //Fornire un'immagine ad ogni studente e mostrarla. L'indirzzo dell'immagine sarà salvato all'interno di DUMMY_STUDS

  //matricola casuale
  numRandom: number = Math.floor(Math.random() * 100);

  get generaMatr(){
    return this.nome.charAt(0) + this.numRandom + this.cognome.charAt(0);
  }

  //@Output creo un custom Event che trasferirà al parent un'informazione
  @Output() selectStud = new EventEmitter<string>();

  onSelectedStud(){
    this.selectStud.emit("Ciao mi chiamo " + this.nome + " " + this.cognome )
  }


  //Per esercizio emettere i corsi a cui sono iscritto 


}
