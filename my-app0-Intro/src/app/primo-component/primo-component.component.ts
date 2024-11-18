import { Component } from "@angular/core";
import { SecondoComponent } from "../secondo/secondo.component";

@Component({
    selector: "primo-comp",
    standalone: true,
    imports: [SecondoComponent],
    templateUrl: "./primo-component.component.html",
    styleUrl: './primo-component.component.css'
})
export class PrimoComponentComponent{
    sede: string = "Piazza dei Mestieri";
    citta: string = "Torino";
    numPartecipanti: number = 28;
    presenza:boolean = true;
    respoCorso!: string;

    constructor(){
        console.log(`Sono in ${this.sede}`);  
        this.assegnaRespo("Davide");
    }
    
    assegnaRespo(nomeRespo:string){
        this.respoCorso = nomeRespo;
    }

    get nomeRespo(){
        return "Davide"
    }
}