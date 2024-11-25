import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  standalone: true,
  imports: [],
  templateUrl: './esercizio.component.html',
  styleUrl: './esercizio.component.css'
})
export class EsercizioComponent {

  bgColor!: {
    r: number,
    g: number,
    b: number
  };

  styleStr!: string;

 onChangeBgColor(){
  this.bgColor = {
    r: this.randomColor(),
    g: this.randomColor(),
    b: this.randomColor()
  }


  this.styleStr = `background-color: rgb(${this.bgColor.r}, ${this.bgColor.g}, ${this.bgColor.b}`;
 }

 private randomColor(){
  let numCas = Math.floor(Math.random() * 255);
  return numCas;
 }
}
