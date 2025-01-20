import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UtentiService } from '../utenti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-utente',
  imports: [],
  templateUrl: './info-utente.component.html',
  styleUrl: './info-utente.component.css'
})
export class InfoUtenteComponent implements OnInit {
  //questo userId è lo stesso del parametro impostato sulla rotta, cioè hanno lo stesso identico nome.
  //Per poterlo leggere devo impostare una prop in appConfig
  //con quessto sistema leggo un parametro dinamico della mia rotta
  userId = input.required<string>();

  private utentiService = inject(UtentiService);

  nomeCompleto = computed(
    () => this.utentiService.users.find((u)=> u.id === this.userId())?.nome
  )

  //OLD VERSION
  private activatedRoute = inject(ActivatedRoute); //Ci restituisce, in molti casi, un observable
  nomeCompleto2 = '';

  ngOnInit(): void {
    console.log(this.activatedRoute); 
    this.activatedRoute.paramMap.subscribe({
      next: (paramMap) =>{
        this.nomeCompleto2 = this.utentiService.users.find(
          (u) => u.id === paramMap.get('userId')
        )?.nome || '';
      }
    })

  }
}
