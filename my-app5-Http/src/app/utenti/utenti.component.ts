import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utente } from './utente.model';

@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})
export class UtentiComponent implements OnInit{

  utenti = signal<Utente[] | undefined>(undefined);
  isFetching = signal(false);

  //per poter utilizzare i metodi dell'httpClient lo devo iniettare qui nella classe e dichiarare nel main (appConfig)
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  // getUsers(){
  //   this.httpClient.get<Utente[]>('http://localhost:3000/users')
  //   .subscribe({
  //     next: (resData) =>{
  //       // console.log(resData); 
  //       this.utenti.set(resData);
  //       console.log("Gli utenti sono i seguenti: ", this.utenti()); 
  //     }
  //   })
  // }

  //Voglio caricare gli utenti nel momento in cui accedo alla pagina utilizzando ngOnInit (implementare l'interfaccia OnInit). ATT: il metodo ngOnInit viene chiamato un attimo dopo il costruttore. L'ngOnInit viene chiamato appena renderizzo il component
  ngOnInit() {
    const subscription = this.httpClient.get<Utente[]>('http://localhost:3000/users')
      .subscribe({
        next: (resData) =>{
          // console.log(resData); 
          this.isFetching.set(true);
          this.utenti.set(resData);
          console.log("Gli utenti sono i seguenti: ", this.utenti()); 
        },

        //la funzione complete viene eseguita al completamento di next
        complete: () =>{
          this.isFetching.set(false);
        }
      });

      //destroyRef (inienttato in alto) è opzionale
      this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      })
  }

}
