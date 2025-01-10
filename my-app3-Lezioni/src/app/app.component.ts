import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lez4StatementComponent } from "./lez4-statement/lez4-statement.component";
import { Lez5SignalsComponent } from "./lez5-signals/lez5-signals.component";
import { Lez6TwoWayBindingDirectivesComponent } from "./lez6-two-way-binding-directives/lez6-two-way-binding-directives.component";
import { Lez7TwoWaySignalsComponent } from "./lez7-two-way-signals/lez7-two-way-signals.component";
import { Lez8ServicesComponent } from './lez8-services/lez8-services.component';
import { Lez9TemplateDrivenComponent } from "./lez9-template-driven/lez9-template-driven.component";
import { Lez10ReactiveFormComponent } from "./lez10-reactive-form/lez10-reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lez4StatementComponent, Lez5SignalsComponent, Lez6TwoWayBindingDirectivesComponent, Lez7TwoWaySignalsComponent, Lez8ServicesComponent, Lez9TemplateDrivenComponent, Lez10ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app3-Lezioni';
}
