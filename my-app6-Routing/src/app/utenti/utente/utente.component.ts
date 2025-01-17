import { Component, input } from '@angular/core';
import { Utente } from '../utente.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-utente',
  imports: [RouterLink],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent {
 utente = input.required<Utente>();
}
