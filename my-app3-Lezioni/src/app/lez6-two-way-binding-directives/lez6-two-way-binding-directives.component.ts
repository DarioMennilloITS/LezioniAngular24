import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lez6-two-way-binding-directives',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './lez6-two-way-binding-directives.component.html',
  styleUrl: './lez6-two-way-binding-directives.component.css'
})
export class Lez6TwoWayBindingDirectivesComponent {

  //OSS: il two way binding permette, attraverso una speciale sintassi, di fondere property binding e event binding

  //ATT: non è obbligatorio ma è buona norma avere una corrispondenza tra il name del campo inpiut e il nome della prop sul quale farò il binding
  titolo: string = "";
  sommario: string = "";
  dataConsegna: string = "";
  prezzo: number = 0;

  alert: string = "";

  onSubmitForm(){
    console.log(this.titolo, this.sommario, this.prezzo, this.dataConsegna);  
    if(this.titolo == "" || this.sommario == "" || this.prezzo == 0 || this.dataConsegna == ""){
      this.alert = "Stai dimenticando qualcosa da qualche parte";
    }else{
        this.titolo = "";
        this.sommario = "";
        this.dataConsegna = "";
        this.prezzo = 0;
        this.alert = "";
    }  
  }
}
