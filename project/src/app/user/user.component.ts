import { Component, computed, Input, input, output} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //@Input({required: true}) user!: User;
  
  user = input.required<User>();
  select = output<string>();
  
  
  imagePath = computed(()=>{return this.user().avatar});

  onSelectUser(){
    this.select.emit(this.user().id);
  }
}
