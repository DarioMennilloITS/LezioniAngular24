import { Component } from '@angular/core';
import { utentiFinti } from './utentiFinti';


// Fuori dalla classe posso dichiarare delle variabili con scope a livello di modulo (o file). Queste var sono accessibili solo dalla classe nelle quali le dichiaro. Se volessi renderla accessibile anche all'esterno devo utilizzare export

let randomIndex = Math.floor(Math.random() * utentiFinti.length);

@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})
export class UtentiComponent {
  // ATT: quando lascio generare il component dalla CLI non viene inserito il costruttore. Questo perché quando renderizzo (cioè utilizzo il selector da qualche parte) viene invocato un costruttore di default

  titolo: string = "Presentazione utenti";

  nomeAdmin = "Laura"; //posso lasciare a Typescript la possibilità di interpretare il tipo utilizzato
  cognomeAdmin:string = "Rossi";
  etaAdmin: number = 30;
  imgAdmin: string = "./assets/userImages/iconAvatar.png";

  utenti: {
    id: string,
    nome: string,
    cognome: string,
    eta: number,
    img: string
  }[] = utentiFinti

  utenteDelMese = this.utenti[randomIndex];

  //OSS: i metodi getters non possono avere parametri di ingresso
  get imgPath(){
    return 'assets/userImages/' + this.utenteDelMese.img;
  }


}
