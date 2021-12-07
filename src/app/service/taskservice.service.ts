import { Injectable } from '@angular/core';
import {TaskItem} from "../model/task/task";

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  public tasklist:  string | null;


  constructor() {
    this.tasklist = window.localStorage.getItem("taskList");
    if(this.tasklist == null){
      window.localStorage.setItem("taskList", JSON.stringify([]));
      this.tasklist = window.localStorage.getItem("taskList");
    }
  }

  getTasks(){
    return JSON.parse(<string>this.tasklist);
  }

  addToList(title: string){
    // @ts-ignore
    let taskData = JSON.parse(this.tasklist);
    let task = new TaskItem() ;
    task.id = this.generateID();
    task.title = title
    task.executed = false;
    taskData.push(task)

    this.tasklist = JSON.stringify(taskData)
    window.localStorage.setItem("taskList", this.tasklist)

  }
  generateID(){
    if (this.tasklist!==null){
      let taskData = JSON.parse(this.tasklist);
      return taskData.length + 1;
    }else {
      return 1;
    }
  }

  setAsExecuted(id: number){
    if (this.tasklist == null){
      return
    }else {
      // @ts-ignore
      let taskData = JSON.parse(this.tasklist);

      for (let i=0; i<taskData.length; i++){

        if (taskData[i].id == id){
          taskData[i].executed = true;
        }
      }
      this.tasklist = JSON.stringify(taskData)
      console.log("taskdata", taskData)
      console.log("tasklist", this.tasklist )
      window.localStorage.setItem("taskList", this.tasklist)
    }
  }
}
