import { Component } from '@angular/core';
import { ListaPizzeComponent } from "./lista-pizze/lista-pizze.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { Pizza } from './pizza/pizza.model';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {

  listaPizzeParent: Pizza[] = [
    {
      id: "p1",
      nome: "Margherita",
      prezzo: 6,
      ingredienti: ["Pomodoro", "Mozzarella", "Basilico"]
    },
    {
      id: "p2",
      nome: "Marinara",
      prezzo: 5,
      ingredienti: ["Pomodoro", "Aglio"]
    },
    {
      id: "p3",
      nome: "Diavola",
      prezzo: 7,
      ingredienti: ["Pomodoro", "Mozzarella", "Salame Piccante", "Basilico"]
    }
  ];

  //Questa prop verrà ricevuta in Input dal Child app-pizza
  selectPizza!: Pizza

  onSelectedPizza(pizza: Pizza){
    console.log(pizza);
    this.selectPizza = pizza;  
  }

}
