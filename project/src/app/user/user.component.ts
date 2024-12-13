import { Component, computed, input, output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
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
