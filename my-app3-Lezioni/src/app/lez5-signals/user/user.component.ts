import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required: true}) nome!: string;

  //ATT: UTILIZZANDO I SIGNAL QUANDO DICHIARO UNA PROP CON INPUT LA DEVO IMPORTARE (TUTTO MINUSCOLO input) DA ANGULAR CORE
  // nome = input();
  
  //Se ho bisogno del tipo lo passo tra <>
  // nome = input<string>();

  //Se ho bisogno che sia required
  nome = input.required<string>();
  cognome = input.required<string>();
  imageAvatar = input.required<string>();

  image = computed(()=>{
    //Anche quando uso la prop all'interno di un metodo della classe devo utilizzare le parentesi()
    return 'respoImg/' + this.imageAvatar() 
  })

  select = output<string>();

  onSelectRespo(){
    this.select.emit(this.nome());
  }
}
