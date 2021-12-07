import { Component, OnInit, Input } from '@angular/core';
import {TaskserviceService} from "../../service/taskservice.service";
import {TaskItem} from "./task";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: TaskItem[]= []


  constructor( private taskservice: TaskserviceService) {

    //this.id =
    /*this.title = taskTitle;
    this.executed = exec==null? false : exec;*/
    //Object.assign(this, values)
  }



  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.tasks =this.taskservice.getTasks();
  }

  addTask(title: string): void {

    this.taskservice.addToList( title)
    //.subscribe(heroes => this.heroes = heroes);
  }

  isExecuted(task: TaskItem) {
    this.taskservice.setAsExecuted(task.id)
  }
}
