import { Component } from '@angular/core';
import {TaskItem} from "./model/task/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglr';
  tasks: TaskItem[] = [];
  selected!: number;


  getThisContact(id: number) {
    this.selected = id;
    console.log(id)
  }
}
