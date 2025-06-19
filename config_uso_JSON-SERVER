# JSON-Server Guida

#### Prerequisiti
- Node (https://nodejs.org/it/download/)
- Npm (verrà installato con Node.js)

## Installazione Json - server

1. Aprire il terminale di Visual Studio Code
2. Eseguire il seguente comando:
```
npm install -g json-server
```
3. Al completamento verificare se è stata installata la versione desiderata eseguento il comando:
```
json-server --version
```
## Costruzione e start database.json
Tutti questi passaggi andranno svolti all'interno di VSC

1. Nella cartella del progetto creare una cartella chiamata "**database**" e all'interno un file chiamato "**db.json**"
Oss 1: in questo file andranno inseriti i dati formato json
Oss 2: il file e la cartella in questione possono essere denominati come si vuole

2. Fare click col tasto destro del mouse sulla cartella database -> Open in Integrated Terminal

3. Verificare che nel terminale si sia aperta la cartella database e digitare il seguente comando per avviare il server
```
json-server --watch db.json
```

Da questo momento in poi è possibile utilizzare le resources di json-server.

**Ricorda**: il file db.json contiente un oggetto singolo, le sue proprietà saranno il punto in cui ritroveremo il dato nella endpoint.
Es db.json:
```
{
    "utenti":[
        {id: 1, "nome": "Pippo", "cognome": "Rossi", "età": 30},
        {id: 2, "nome": "Paola", "cognome": "Bianchi", "età": 30},
    ],

    "docenti":[
        {id: 1, "nome": "Laura", "cognome": "Verdi", "materia": "Javascript"},
        {id: 2, "nome": "Marco", "cognome": "Gialli", "materia": "HTML"},
    ],

}
```
Dato il json qui sopra, ritroverò i dati nelle seguenti endopoint
**utenti** in http://localhost:3000/utenti
**docenti** in http://localhost:3000/docenti

### Problemi con Execution Policy
Nel caso in cui non riesca ad eseguire i comandi di json-server è probabile che ci siano problemi di execution policy.

Provare sempre a chiudere e riavvirare VSC prima di modificare le Execution Policy

Settare Execution Policy
1. Start di Windows -> Powershell -> tastoDestro Esegui come Amministratore
2. Digitare: Set-ExecutionPolicy Unrestricted -> premi Invio
3. Digitare T per "a tutti" -> Premi Invio 

# Alternativa
mock.api
