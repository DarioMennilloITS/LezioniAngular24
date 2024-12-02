import { Component } from '@angular/core';
import { IntroComponent } from "./intro/intro.component";
import { UserComponent } from "./user/user.component";
import { Responsabile } from './responsabile.model';
import { RESPO_DB } from './RESPO_DB';

@Component({
  selector: 'app-lez5-signals',
  standalone: true,
  imports: [IntroComponent, UserComponent],
  templateUrl: './lez5-signals.component.html',
  styleUrl: './lez5-signals.component.css'
})
export class Lez5SignalsComponent {

  responsabili: Responsabile[] = RESPO_DB;

  onSelectedRespo(nome: string){
    console.log("Sto cliccando su " + nome); 
  }


}
