import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  isSubmitted!: boolean;

  onSubmit(formRegistrazione: NgForm){
    
    if(formRegistrazione.form.invalid){
      console.log("Il tuo form è compilato male");
      this.isSubmitted = false;
      return;
    }
    
    console.log(formRegistrazione);
    console.log(formRegistrazione.value);
    console.log(formRegistrazione.control);

    const nome = formRegistrazione.form.value.nome;
    const cognome = formRegistrazione.form.value.cognome;
    const dataNascita = formRegistrazione.form.value.dataNascita;

    console.log(nome, cognome, dataNascita);
    this.isSubmitted = true;
    
  }

}
