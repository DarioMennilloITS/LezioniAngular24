import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lez4StatementComponent } from "./lez4-statement/lez4-statement.component";
import { Lez5SignalsComponent } from "./lez5-signals/lez5-signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lez4StatementComponent, Lez5SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app3-Lezioni';
}
