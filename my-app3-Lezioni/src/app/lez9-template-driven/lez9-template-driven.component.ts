import { Component } from '@angular/core';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
  selector: 'app-lez9-template-driven',
  standalone: true,
  imports: [LoginComponent, SignupComponent],
  templateUrl: './lez9-template-driven.component.html',
  styleUrl: './lez9-template-driven.component.css'
})
export class Lez9TemplateDrivenComponent {

}
