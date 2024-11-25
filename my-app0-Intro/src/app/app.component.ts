import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponent } from "./secondo/secondo.component";
import { UtentiComponent } from "./utenti/utenti.component";
import { UtenteComponent } from "./utente/utente.component";
import { EsercizioComponent } from './esercizio/esercizio.component';

//@Component si chiama Decorator ed è una caratteristica di Typescript
//Il component definisce attrraverso un oggetto JS come è fatta la classe sottostante e di che "tipo" è
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimoComponentComponent, SecondoComponent, UtentiComponent, UtenteComponent, EsercizioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'my-app0-Intro';

  nomeSviluppatore: string = "Dario";
  corso: string = "Web Developer";
  presenza: boolean = true;
  sede: string = "Piazza dei Mestieri"

  constructor(){
    console.log(`Mi chiamo ${this.nomeSviluppatore}, frquento il corso ${this.corso}. Oggi sono presente: ${this.presenza}. Nella sede di ${this.sede}`);
  }
}
