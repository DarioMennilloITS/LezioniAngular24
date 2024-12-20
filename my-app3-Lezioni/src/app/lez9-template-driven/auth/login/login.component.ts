import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onSubmit(formData: NgForm){
    console.log("Ciao, hai appena fatto il login", formData);

    //leggo i dati del form leggendo le prop del macro oggetto Form che è stato appena costruito
    const email = formData.form.value.email;
    const pass = formData.form.value.password;
    
    
    if(!formData.form.valid){
      return;
    }else{
      console.log(email, pass);
    }


    formData.form.reset();

  }

}
