import { Injectable } from '@angular/core';
import { LISTA_UTENTI } from './DUMMY_USERS';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  get users(){
    return LISTA_UTENTI;
  }

}
