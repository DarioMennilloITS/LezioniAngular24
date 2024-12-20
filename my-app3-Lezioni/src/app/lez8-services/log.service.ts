import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }


  logInUser(authKey: string){
    // console.log("L'utente loggato si chiama: " + name + " " + lastName);
    return true;
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
