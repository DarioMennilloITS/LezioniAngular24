# Progetto d'esame: Sistema di Prenotazione Palestra "AngFitness"

## Descrizione del Progetto
Sviluppare un'applicazione web in Angular per la gestione delle prenotazioni di una palestra. L'applicazione deve permettere agli utenti di visualizzare e prenotare gli allenamenti o i corsi preferiti.

## Requisiti Funzionali

### 1. Multipagina
- Creare le seguenti pagine (Home, Chi Siamo, I nostri Corsi, Amministrazione)

### 2. Gestione Corsi
- Visualizzare l'elenco dei corsi disponibili (lista o card)
- Mostrare dettagli per ogni corso: nome, descrizione, istruttore, durata, capacità massima 
Nota: è a discrezione dello studente come mostrare i dettagli del corso, nella stessa pagina in un apposito container, in un dialog, ecc. 

### 3. Sistema di Prenotazione
- Permettere agli utenti di prenotare una sessione
- Implementare controlli sulla capacità massima, al raggiungimento del numero massimo di iscritti non è più prenotabile
- Mostrare conferma della prenotazione

### 4. Area Amministrativa
- Aggiungere/eliminare corsi
- Visualizzare report sulle prenotazioni 

## Requisiti Tecnici

### Struttura dell'Applicazione
1. Utilizzare Angular 17+
2. Implementare il routing
3. Implementare almeno 1 service per la gestione dei corsi 
4. Implementare e gestire il form di aggiunta corsi in uno dei modi visti a lezione (template driven, reactive forms)
5. Utilizzare json-server 


### UI/UX
1. Possibilità di utilizzare Bootstrap
2. Fornire feedback visuale per le azioni dell'utente
3. Implementare form reattivi con validazione
4. La pagina Home dovrà contenere una sezione nella quale vengono mostrati 4 corsi, il resto è a discrezione dello studente
5. La pagina Chi Siamo è a discrezione dello studente


### API e Backend
1. Simulare un backend utilizzando json-server
2. Implementare chiamate HTTP utilizzando HttpClient
3. Gestire gli errori in modo appropriato

## Criteri di Valutazione

1. **Architettura e Organizzazione del Codice (30%)**
   - Struttura dei componenti
   - Gestione dello stato

2. **Funzionalità (30%)**
   - Completezza delle features richieste
   - Correttezza dell'implementazione

3. **UI/UX (20%)**
   - Usabilità
   - Feedback all'utente

4. **Qualità del Codice (20%)**
   - Best practices Angular
   - Pulizia e leggibilità
   - Commenti e documentazione

## Consegna

Il progetto deve essere consegnato:
1. Repository Git 
2. Breve relazione sulle scelte implementative
