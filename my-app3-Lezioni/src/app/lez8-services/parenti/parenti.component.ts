import { Component } from '@angular/core';
import { ParenteComponent } from "./parente/parente.component";
import { ParentiService } from './parenti.service';
import { Parente } from './parente/parente.model';
import { LogService } from '../log.service';

@Component({
  selector: 'app-parenti',
  standalone: true,
  imports: [ParenteComponent],
  templateUrl: './parenti.component.html',
  styleUrl: './parenti.component.css'
})
export class ParentiComponent {

  // parenti: Parente[] = [];

  //1° modo per mettere in atto la Dependency Injection: nel costruttore dichiaro il service come argomento. Da questo momento io avrò a disposizione metodi e prop dichiarati in parentiService
  //ATT: l'argomento della firma deve essere private perché voglio che il mio service sia visibile solo ed esclusivamente all'interno della classe nella quale sto iniettando
  constructor(private parentiService: ParentiService, private logService: LogService){
    // console.log("Sto leggendo i parenti del service in parenti Component: ", this.parentiService.listaParenti);
    // this.parentiService.stampaParenti();

    //ATT: visto che elimino un parente dalla lista devo poter vedere la lista aggiornata. Quindi non posso avere l'assegnazione qui nel costruttore sperando nella modifica
    // this.parenti = this.parentiService.getParenti()
    // this.logService.logInUser("Dario", "Mennillo");
  }

  get allParenti(){
    return this.parentiService.getParenti();
  }

}
