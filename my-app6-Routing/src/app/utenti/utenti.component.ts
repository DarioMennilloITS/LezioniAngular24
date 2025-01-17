import { Component, inject } from '@angular/core';
import { UtentiService } from './utenti.service';
import { UtenteComponent } from './utente/utente.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-utenti',
  imports: [UtenteComponent, RouterOutlet],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})
export class UtentiComponent {
  private utentiService = inject(UtentiService);
  utenti = this.utentiService.users;
}
