// Tipi di dato
//let nomeVariabile: tipo
var nome = "Dario";
var cognome = "Mennillo";
var eta = 35;
//eta = "36"; non posso di certo saltare da un dato all'altro 
var PI = 3.14;
var materie = [
    "JS",
    "Angular",
    "React",
    "Java"
];
//any - tipo Dinamico, cioè può assumere qualsiasi tipo io voglia.
var corso;
corso = "Web Developer";
corso = 42;
corso = true;
//In questo caso la var automobile può assumere 2 tipi
var automobile;
automobile = "Peugeot";
automobile = true;
var mioAnimaleDom = false;
var miaMoto = {
    marca: "Kawasaki",
    modello: "z750",
    cilindrata: 750,
    km: 20000
};
//Non sono obbligato a dichiare il tipo. Per cui verrà interpretato
var presentazione = "Ciao, mi chiamo ".concat(nome, " ").concat(cognome, ", ho ").concat(eta, " anni. Ho una motocicletta, ").concat(miaMoto.marca, " ").concat(miaMoto.modello, " ");
console.log(presentazione);
var demo = document.querySelector("#demo");
demo.innerHTML = "<h2>" + presentazione + "</h2>";
