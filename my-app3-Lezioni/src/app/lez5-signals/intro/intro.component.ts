import { Component } from '@angular/core';
import { RESPO_DB } from './RESPO_DB';

const randomIndex = Math.floor(Math.random() * RESPO_DB.length);

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})

export class IntroComponent {

  //Un signal è un Oggetto wrapper nel quale registro un valore di qualsiasi tipo. So che questo valore potrà cambiare. Al change di queto valore Angular viene notificato e quindi è  in grado di aggiornare la parte specifica 

  //Signals are TRACKABLE DATA CONTAINERS

  selectedRespo = RESPO_DB[randomIndex]

  onSelectRespo(){
    const randomIndex = Math.floor(Math.random() * RESPO_DB.length);
    
    
  }
}
