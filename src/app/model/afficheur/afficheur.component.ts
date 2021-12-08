import { Component, OnInit, Input } from '@angular/core';
import {FormulaireserviceService} from "../../service/formulaireservice.service";
import {Personne} from "../formulaire/personne";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-afficheur',
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.css']
})
export class AfficheurComponent implements OnInit {
  @Input() selectedContact = 0;
  contactDetail!: Personne;
  contactForm = new FormGroup({
    nom: new FormControl('',[ Validators.required, Validators.minLength(4)]),
    id: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private formService: FormulaireserviceService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.selectedContact !== undefined && this.selectedContact !== 0){
      this.getThisContactInfo(this.selectedContact)
    }
  }

  private getThisContactInfo(selectedId: number) {
   // @ts-ignore
    let stringContact =  JSON.parse(this.formService.getSelectedContact(selectedId))
    if (this.contactDetail == undefined){
      this.contactDetail = new Personne();
    }
    this.contactDetail.id=stringContact.id
    this.contactDetail.nom=stringContact.nom
    this.contactDetail.pseudo=stringContact.pseudo
    this.contactDetail.email=stringContact.email
  }

  onFormSubmit() {

    // stop here if form is invalid
   /* if (this.contactForm.invalid) {
      return;
    }*/

    console.log(this.contactForm.value)
  }
}
