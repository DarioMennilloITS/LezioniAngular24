import { Component, computed, inject, input } from '@angular/core';
import { UtentiService } from '../utenti.service';

@Component({
  selector: 'app-info-utente',
  imports: [],
  templateUrl: './info-utente.component.html',
  styleUrl: './info-utente.component.css'
})
export class InfoUtenteComponent {
  //questo userId è lo stesso del parametro impostato sulla rotta, cioè hanno lo stesso identico nome.
  //Per poterlo leggere devo impostare una prop in appConfig
  //con quessto sistema leggo un parametro dinamico della mia rotta
  userId = input.required<string>();

  private utentiService = inject(UtentiService);

  nomeCompleto = computed(
    () => this.utentiService.users.find((u)=> u.id === this.userId())?.nome
  )
}
