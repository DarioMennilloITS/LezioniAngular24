# Deployment su Github Pages
### Come vedere la tua app online

1. Vai su Github e crea un repotsitory es: "mia-App-deploy"
Attenzione: non aggiungere nessun file readme alla creazione del Repository

2. Clona il Repository in locale
    ```
    clone github.com/mia-App-deploy
    ```
3. Nella cartella del repository crea una nuova app con il seguente comando:
   ```
   ng new mia-App-deploy --directory ./
   ```
   Questo comando è diverso dal solito, con --directory non verrà creata la cartella della app ma tutti i file andranno diretti nella cartella clonata.
4. Nella cartella della app, da terminale, lanciare il seguente comando
   ```
   ng build --output-path docs --base-href /mia-App-deploy/
   ```
   Oss: docs è il nome della cartella in cui verrà eseguita la build per cui può avere qualsiasi nome.
   /mia-App-deploy invece è il nome del repository

5. A questo punto è possibile fare il push di tutti i file della cartella su Github.

6. Ritornare sul Repository di Github, selezionare "Settings" nella pagina del Repository - > Selezionare Pages nella colonna a sinistra -> Selezionare il branch del quale vedere il deploy, quindi selezionare docs(il nome della cartella nel quale abbiamo fatto il deploy)
