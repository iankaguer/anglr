import { Injectable } from '@angular/core';
import {Personne} from "../model/formulaire/personne";
import {TaskItem} from "../model/task/task";

@Injectable({
  providedIn: 'root'
})
export class FormulaireserviceService {

  public contacts:  string | null;

  constructor() {
    this.contacts = window.localStorage.getItem("contact");
    if(this.contacts == null){
      window.localStorage.setItem("contact", JSON.stringify([]));
      this.contacts = window.localStorage.getItem("contact");
    }
  }

  getContacts(){
    return JSON.parse(<string>this.contacts);
  }

  addContact(valeurs: string){
    //console.log(valeurs)
    let jsonData = JSON.parse(valeurs);
    let personne = new Personne() ;

    personne.id = this.generateID()
    personne.nom = jsonData.nom
    personne.email = jsonData.mail
    personne.pseudo = jsonData.pseudo

    let arrayData = JSON.parse(this.contacts|| "");
    arrayData.push(personne)

    this.contacts = JSON.stringify(arrayData)
    window.localStorage.setItem("contact", this.contacts)

  }

  // @ts-ignore
  getSelectedContact(id: number) {
    let taskData = JSON.parse(this.contacts || "");
    for (let i=0; i<taskData.length; i++){
      if (taskData[i].id == id){
        return JSON.stringify(taskData[i]);
      }
    }
  }

  generateID(){
    if (this.contacts!==null){
      let contactsData = JSON.parse(this.contacts);
      return contactsData.length + 1;
    }else {
      return 1;
    }
  }

}
