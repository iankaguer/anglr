import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './model/task/task.component';
import { TaskFilterPipe } from './pipe/task-filter.pipe';
import { TaskFilterDelPipe } from './pipe/task-filter-del.pipe';
import { FormulaireComponent } from './model/formulaire/formulaire.component';
import { AfficheurComponent } from './afficheur/afficheur.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFilterPipe,
    TaskFilterDelPipe,
    FormulaireComponent,
    AfficheurComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
