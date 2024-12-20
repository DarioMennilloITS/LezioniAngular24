import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { LISTA_UTENTI } from './lista-utenti';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

  users = LISTA_UTENTI;

  selectedUserId!: string;

  onSelectUser(id: string){
    console.log("Stai cliccando sull'utente", id);
    this.selectedUserId = id; 
  }

  get selectedUser(){
    return this.users.find((u)=>{ return u.id === this.selectedUserId});
  }
}
