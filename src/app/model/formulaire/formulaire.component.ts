import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormulaireserviceService} from "../../service/formulaireservice.service";
import {Personne} from "./personne";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  @Output() contactEvent = new EventEmitter<number>();
  contactForm = new FormGroup({
    nom: new FormControl('',[ Validators.required, Validators.minLength(4)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    pseudo: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  contacts: Personne[]= []
  submitted= false;

  constructor(private formService: FormulaireserviceService) {

  }

  ngOnInit(): void {
    this.getContacts()

  }



  getContacts(): void {
    this.contacts =this.formService.getContacts();
  }

  onFormSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    this.formService.addContact( JSON.stringify(this.contactForm.value))
    this.getContacts()
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
  }

  onReset(){
    this.submitted = false;
    this.contactForm.reset();
  }


  get nom() { return this.contactForm.get('nom'); }
  get mail() { return this.contactForm.get('mail'); }
  get pseudo() { return this.contactForm.get('pseudo'); }

  getThisContact(id: number) {
    //console.log(id)
    this.contactEvent.emit(id);
  }
}
