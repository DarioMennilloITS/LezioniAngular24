export interface Task{
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}

//Questa interfaccia NewTask mi servirà solo per aggiungere un nuovo Task 
export interface NewTask{
    title: string;
    summary: string;
    dueDate: string;
}