import { Component, input, output } from '@angular/core';
import { Utente } from '../utente.model';

@Component({
  selector: 'app-utente',
  standalone: true,
  imports: [],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent {
    utente = input.required<Utente>();
    selectUser = output<Utente>();

    onSelectUser(user: Utente){
      this.selectUser.emit(user);
    }
}
