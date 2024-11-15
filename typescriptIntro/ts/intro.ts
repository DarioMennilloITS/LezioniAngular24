// Tipi di dato
//let nomeVariabile: tipo
let nome: string = "Dario";
let cognome: string = "Mennillo";
let eta: number = 35;
//eta = "36"; non posso di certo saltare da un dato all'altro 
const PI: number = 3.14;

let materie: string[] = [
 "JS",
 "Angular",
 "React",
 "Java"
];

//any - tipo Dinamico, cioè può assumere qualsiasi tipo io voglia.
let corso: any;
corso = "Web Developer";
corso = 42;
corso = true;


//In questo caso la var automobile può assumere 3 tipi
let automobile: string | boolean | number[];
automobile = "Peugeot";
automobile = true;
//automobile = 4; //Non può valere number

//Tipo Custom 
type AnimaleDomestico = "Scimmia" | "Gatto" | 5 | boolean;

let mioAnimaleDom: AnimaleDomestico = false;

type Motocicletta = {
     marca: string,
     modello: string,
     cilindrata: number,
     km: number
}

let miaMoto: Motocicletta = {
    marca: "Kawasaki",
    modello: "z750",
    cilindrata: 750,
    km: 20000
}



//Non sono obbligato a dichiare il tipo. Per cui verrà interpretato
let presentazione = `Ciao, mi chiamo ${nome} ${cognome}, ho ${eta} anni. Ho una motocicletta, ${miaMoto.marca} ${miaMoto.modello} `;

console.log(presentazione);

let demo = document.querySelector("#demo")
demo.innerHTML = "<h2>" + presentazione + "</h2>";

