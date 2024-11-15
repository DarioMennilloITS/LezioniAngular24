let nome = "Dario";
let cognome = "Mennillo";
let eta = 32;
let presenza = true;
presenza = "presente"


let demo = document.querySelector("#demo");

demo.textContent = `Ciao, mi presento sono: ${nome} ${cognome}, ho ${eta} anni.`;

class Studente{
    constructor(nome, cognome, matricola, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.eta = eta;
    }

    presentati = function() {
        return "Ciao .."
    }
}
