import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Utente } from './utente.model';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private httpClient = inject(HttpClient);
  private utentiPreferiti = signal<Utente[]>([]);

  //creo un metodo generico per recuperare dati
  private fetchUsers(url: string, errorMessage: string){
    return this.httpClient.get<Utente[]>(url)
    .pipe(
      catchError((error)=>{
        console.log(error);
        return throwError(
          ()=>{
            new Error(errorMessage);
          }
        )
      })
    )
  }

  loadUtenti(){
    return this.fetchUsers('http://localhost:3000/users', "Qualcosa è andato storto")
  }

  //creo una prop da intercettare con il component utenti preferiti
  loadedUtentiPreferiti = this.utentiPreferiti.asReadonly();

  //Questo metodo fa la GET degli utenti preferiti
  loadUtentiPreferiti(){
    return this.fetchUsers('http://localhost:3000/utentiPreferiti', "Qualcosa è andato storto con i preferiti")
    .pipe(
      tap({
        next: (usersPref) => {
          return this.utentiPreferiti.set(usersPref);
        }
      })
    )
  }

  //Questo la POST dell'utente preferito
  addUtentePreferito(user: Utente){
    this.utentiPreferiti.update( prevUser => [...prevUser, user]);
    return this.httpClient.post('http://localhost:3000/utentiPreferiti', user)
  }


  deleteUser(user:Utente){
    this.utentiPreferiti.update(
      users => users.filter(u => u.id !== user.id)
    )
    return this.httpClient.delete('http://localhost:3000/utentiPreferiti/' + user.id);
  }

}
