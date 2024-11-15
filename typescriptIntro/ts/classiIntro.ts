//Class, aspetto fondamentale in Angular
class Auto {
  // definisco prima le prop poi i costruttori e i metodi
  marca: string;
  modello: string;
  cilindrata: number;
  private km: number = 0;

  //dopo definisco i metodi

  constructor(
    marca: string,
    modello: string,
    cilindrata: number,
    private isHybrid: boolean
  ) {
    this.marca = marca;
    this.modello = modello;
    this.cilindrata = cilindrata;
  }

  guida(distanza: number) {
    // this.accendi();
    this.km += distanza;
    return this.km;
  }

  //sto definendo anche il tipo di restituzione
  accendi(): string {
    return "WROOOOOOM";
  }

  accediAlleInfo(password: string) {
    if (password === "1234") {
      return "La tua auto è ibrida: " + this.isHybrid;
    } else {
      return "Mi spiace non posso fornirti questa informazione";
    }
  }
}

//Creo l'istanza della classe Auto
let miaAuto = new Auto("Audi", "S3", 2000, true); //Qui viene invocato il costruttore
console.log(miaAuto.marca);
console.log(miaAuto.modello);
console.log(miaAuto.cilindrata);
console.log(miaAuto.accendi());
console.log(miaAuto.accediAlleInfo("PIPPO"));
console.log(miaAuto.accediAlleInfo("1234"));

//Forma compatta per la definizione di classi
class Persona {
  constructor(
    public nome: string,
    public cognome: string,
    private codFis: string
  ) {
    //posso anche non specificare la definizione attraverso il this
  }

  private presentati(): string {
    let presentazione = `Ciao mi chiamo ${this.nome} ${this.cognome}, ho il seguente codice fiscale: ${this.codFis}`;

    return presentazione;
  }

  accediAlleInfo(username: string, password: string): string {
    if (username === "Dario" && password === "abcde") {
      return this.presentati();
    } else {
      return "Credenziali non valide";
    }
  }
}

//
let persona1 = new Persona("Anna", "Bianchi", "BNCANN887D34F990S");
// console.log(persona1.codFisc); //NON posso accedere alle prop e ai metodi dichiarati private

console.log(persona1.accediAlleInfo("Dario", "abcde"));
