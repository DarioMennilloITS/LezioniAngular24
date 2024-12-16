import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }


  logInUser(name: string, lastName: string){
    console.log("L'utente loggato si chiama: " + name + " " + lastName);
  }

  logOutUser(){

  }

  authorize(userName: string, pass: string ): boolean{
    if(userName !== "" && pass !== ""){
      return true;
    }else{
      return false
    }
  }

}
