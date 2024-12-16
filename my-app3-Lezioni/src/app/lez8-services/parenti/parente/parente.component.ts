import { Component, inject, Input } from '@angular/core';
import {type Parente } from './parente.model';
import { ParentiService } from '../parenti.service';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-parente',
  standalone: true,
  imports: [],
  templateUrl: './parente.component.html',
  styleUrl: './parente.component.css'
})
export class ParenteComponent {

  @Input({required:true}) parente!: Parente;
  // @Output() delete = new EventEmitter<string>(); Me la posso pure dimenticare

  //1° modo
  // constructor(private parentiService: ParentiService){}

  // 2° MOdo: utilizzare la funzione inject(NomeDellaClasseDelService). ATT: la prop va comunque settata con modificatore private
  private parentiService = inject(ParentiService);
  private logService = inject(LogService);




  onDeleteParente(){
    // this.delete.emit(this.parente.id);
    console.log("sto rimuovendo il parente con il seguente id: " + this.parente.id);
    this.parentiService.removeParenteById(this.parente.id, "pippo", "1234");
    this.logService.logInUser("Dario", "Mennillo");
  }


}
