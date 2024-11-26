//Utilizzo l'interface per creare il tipo del dato
export interface Studente{
    id: string,
    nome: string,
    cognome: string
}


//Posso anche avere più interface all'interno dello stesso file. Ovviamente importerò nei Component quella necessaria
// export interface NewStudente{
//     id: string,
//     nome: string,
//     cognome: string,
//     matricola: string
// }

// export type Studente ={
//     id: string,
//     nome: string,
//     cognome: string
// }