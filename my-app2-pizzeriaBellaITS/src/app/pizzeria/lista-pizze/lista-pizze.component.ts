import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {

 //listaPizzeChild è un Array
  @Input({required: true}) listaPizzeChild!: Pizza[];

  @Output() selectedPizza = new EventEmitter();

  onSelectPizza(pizza: Pizza){
    this.selectedPizza.emit(pizza);
  }
}
