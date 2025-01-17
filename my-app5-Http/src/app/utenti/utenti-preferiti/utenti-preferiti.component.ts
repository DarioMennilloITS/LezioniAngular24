import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Utente } from '../utente.model';
import { UtentiService } from '../utenti.service';

@Component({
  selector: 'app-utenti-preferiti',
  standalone: true,
  imports: [],
  templateUrl: './utenti-preferiti.component.html',
  styleUrl: './utenti-preferiti.component.css'
})
export class UtentiPreferitiComponent implements OnInit{

  //utentiPref = signal<Utente[] | undefined>(undefined);

  // private httpClient = inject(HttpClient);
  private usersService = inject(UtentiService);

  utenti = this.usersService.loadedUtentiPreferiti;

  ngOnInit() {
    // this.httpClient.get<Utente[]>('http://localhost:3000/utentiPreferiti')
    // .subscribe({
    //   next: (resData) =>{
    //     console.log("I tuoi preferiti sono ", resData);
    //     this.utentiPref.set(resData);
    //   }
    // })

    

    this.usersService.loadUtentiPreferiti()
    .subscribe({
      //Commento il next poiché viene eseguito dentro il tap all'interno del service
      // next: (resData)=> {
      //   this.utentiPref.set(resData);
      // },
      complete: () => {
        console.log("Load completato");
      }
    })
  }

  
  removeUtente(user: Utente){
    this.usersService.deleteUser(user).subscribe({
      next: (resData=>{
        console.log("Stai eliminando", resData);
      })
    })
  }

}
