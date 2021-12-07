import { Component } from '@angular/core';
import {TaskComponent} from './model/task/task.component' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglr';
  task: TaskComponent[] = [];
}
