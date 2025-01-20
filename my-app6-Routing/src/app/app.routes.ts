import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { StudentiComponent } from './studenti/studenti.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CorsoComponent } from './corso/corso.component';
import { UtenteComponent } from './utenti/utente/utente.component';
import { InfoUtenteComponent } from './utenti/info-utente/info-utente.component';

//1. importante l'ordine di dichiarazione delle rotte
export const routes: Routes = [
    {path:'', component: HomeComponent},
    
    {path:'utenti', component: UtentiComponent, children: [
        //i : impostano un parametro dinamico
        {path: ':userId', component: InfoUtenteComponent}
    ]},

    
    {path: 'studenti', component: StudentiComponent, 
        children: [
            //le rotte children vengono concatenate in automatico. Adesso dovrò utilizzare un routerOutlet all'interno del component studenti
            {path: 'corso', component: CorsoComponent} //www.dominio.it/studenti/corso/web
        ]
    },

    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'} //WILDCARD
];
