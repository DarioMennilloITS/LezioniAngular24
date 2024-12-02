import { Component, EventEmitter, Input, Output } from '@angular/core';
import {type Responsabile } from './responsabile.model';

@Component({
  selector: 'app-responsabile',
  standalone: true,
  imports: [],
  templateUrl: './responsabile.component.html',
  styleUrl: './responsabile.component.css'
})
export class ResponsabileComponent {
    @Input({required: true}) respo!: Responsabile;

    // il mio evento di nome Disponibilita dovrà in questo caso passare una stringa
    @Output() disponibilita = new EventEmitter<string>();

    onMostraDispo(nCorsi: number){
      let stringaDisponibilita: string = "";  
      if(nCorsi < 4)
        stringaDisponibilita = "hai ancora posto per dei corsi";
      else
        stringaDisponibilita = "non hai più disponibilità";
              
      // passo quello che voglio a un evento che scelgo io come chiamare quando creo l'oggetto
      this.disponibilita.emit(stringaDisponibilita);
    }
  }
