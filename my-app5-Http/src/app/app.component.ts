import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtentiComponent } from "./utenti/utenti.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UtentiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app5-Http';
}
