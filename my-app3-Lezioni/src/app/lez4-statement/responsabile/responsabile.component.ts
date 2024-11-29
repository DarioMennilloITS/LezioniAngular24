import { Component, Input } from '@angular/core';
import {type Responsabile } from './responsabile.model';

@Component({
  selector: 'app-responsabile',
  standalone: true,
  imports: [],
  templateUrl: './responsabile.component.html',
  styleUrl: './responsabile.component.css'
})
export class ResponsabileComponent {
    @Input({required: true}) respo!: Responsabile;


}
