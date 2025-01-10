import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

//questa funzione crea il mio CustomValidator, sono obbligato a passare un parametro di tipo AbstractControl
function carattereSpeciale(control: AbstractControl){
   if(control.value.includes("#")){
    return null;
   }

   //qui mi faccio restituire un oggetto contenente il valore dell'errore che sto personalizzando
   return {carattereSpecialeNonPresente: true};
}

function emailUnica(control: AbstractControl){
  //devo utilizzare la funzione of importata da rxjs che mi restituisce il valore dell'observable dato che sto utilizzando un asyncValidator, OSS: tutte le vole che faccio qualcosa di async ho a che fare con gli observable
  if(control.value !== 'mario@mail.com'){
    //con la funzione of leggo direttamente il valore dell'observable
    return of(null);
  }

  return of({emailNonUnica: true})
}

@Component({
  selector: 'app-login',
  standalone: true,
  //ATT: questo import è ben diverso dal template driven approach. Con questo import sincronizzo il mio form con l'oggetto che creo sotto
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //creo l'oggetto chiamato form (nome della prop formGroup dichiarata nel template)
  //Nel configuration onject creo, ricalco, il form del template
  // form = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })


  //Con Validators
  form = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.email, 
        Validators.required
      ],
      asyncValidators: [emailUnica]

    }),
    password: new FormControl('', {
      validators: [
        Validators.required, 
        Validators.minLength(6), 
        carattereSpeciale],

      // asyncValidators: (control => {})
    })
  })
 
  get isEmailValid(){
    return (this.form.controls.email.touched && this.form.controls.email.invalid)
  }

  get isPasswordValid(){
    return (this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid)
  }


  onSubmit(){
    console.log(this.form);
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(email, password);
    
  }
}
