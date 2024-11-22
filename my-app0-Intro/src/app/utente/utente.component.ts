import { Component } from '@angular/core';
import { utentiFinti } from '../utenti/utentiFinti';

let randomIndex = Math.floor(Math.random() * utentiFinti.length);

@Component({
  selector: 'app-utente',
  standalone: true,
  imports: [],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent {

  selectedUtente = utentiFinti[randomIndex];

  get imgPath(){
    return 'assets/userImages/' + this.selectedUtente.img;
  }

  //EVENT BINDING
  //creo un metodo che scatterà al click sul pulsante
  //buona abitudine: inserire on davanti al nome dei metodi che verranno fatti scattare ad un evento
  onSelectUtente(nomeUser: string){
    console.log("Sto cliccando sul pulsante");
    console.log("Utente: " + nomeUser);
    console.log("Utente: " + this.selectedUtente.nome);

    //Questo meccanismo si chiama Change Detector. Mi permette di renderizzare "al volo" delle proprietà di classe che variano durante l'esecuzione del codice
    const randomIndex2 = Math.floor(Math.random() * utentiFinti.length);
    this.selectedUtente = utentiFinti[randomIndex2];
  }

  nomeUser!: string;

  onClickBtn(nomeUser: string){
    //cambio lo stato della classe
    this.nomeUser = nomeUser;
    console.log("Ho cliccato sul pulsante");
    console.log("Ciao " + this.nomeUser);
  }

}
