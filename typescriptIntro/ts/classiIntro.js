//Class, aspetto fondamentale in Angular
var Auto = /** @class */ (function () {
    //dopo definisco i metodi 
    function Auto(marca, modello, cilindrata, isHybrid) {
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.isHybrid = isHybrid;
        // definisco prima le prop poi i costruttori e i metodi 
        // marca: string;
        // modello: string;
        this.km = 0;
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
    }
    Auto.prototype.guida = function (distanza) {
        // this.accendi();
        this.km += distanza;
        return this.km;
    };
    //sto definendo anche il tipo di restituzione
    Auto.prototype.accendi = function () {
        return "WROOOOOOM";
    };
    Auto.prototype.accediAlleInfo = function (password) {
        if (password === "1234") {
            return "La tua auto è ibrida: " + this.isHybrid;
        }
        else {
            return "Mi spiace non posso fornirti questa informazione";
        }
    };
    return Auto;
}());
//Creo l'istanza della classe Auto
var miaAuto = new Auto("Audi", "S3", 2000, true); //Qui viene invocato il costruttore
console.log(miaAuto.marca);
console.log(miaAuto.modello);
console.log(miaAuto.cilindrata);
console.log(miaAuto.accendi());
console.log(miaAuto.accediAlleInfo("PIPPO"));
console.log(miaAuto.accediAlleInfo("1234"));
