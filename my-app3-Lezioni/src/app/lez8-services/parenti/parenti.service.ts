import { Injectable } from '@angular/core';
import { type Parente } from './parente/parente.model';
import { LogService } from '../log.service';


//Un service è una classe con decorator @Injectable(). Grazie a questo posso iniettare le dipendenze nei component che richiedono l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class ParentiService {

  //Adesso che la listaParenti è private posso accedervi solo dall'interno della classe stessa, cioè del service
  private listaParenti: Parente[]=[
  {
    id:"p1",
    nome: "Paolo",
    cognome: "Rossi",
    ruolo: "zio"
  },
  {
    id:"p2",
    nome: "Luisa",
    cognome: "Verdi",
    ruolo: "cugina"
  },
  {
    id:"p3",
    nome: "Marco",
    cognome: "Gialli",
    ruolo: "nonno"
  },
];

//posso anche iniettare un service all'interno di un altro service
  constructor(private logService: LogService) {  }

  loggati(nome: string, cognome: string){
    let authKey = nome+"23456789oiuhvoijhsvdoijs"+cognome;
    this.logService.logInUser(authKey);  
  }

  getParenti(){
    return this.listaParenti;
  }

  getParenteById(id: string){
    return this.listaParenti.find(p => p.id === id);
  }

  private isAuth: boolean = false;

  removeParenteById(id: string, user: string, pass: string){
    if(user == "pippo" && pass == "1234"){
      this.listaParenti = this.listaParenti.filter(p => p.id !== id);
    }else{
      return;
    }
  }

  stampaParenti(){
    this.listaParenti.forEach(p =>{
      console.log(p.nome, p.cognome);
    })
  }

}
