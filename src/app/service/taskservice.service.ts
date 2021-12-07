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
    task.deleted = ""
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
          taskData[i].executed = !taskData[i].executed;
        }
      }
      this.tasklist = JSON.stringify(taskData)
      window.localStorage.setItem("taskList", this.tasklist)
    }
  }

  setDeleted(task: TaskItem) {
    let taskData = JSON.parse(this.tasklist || "");
    for (let i=0; i<taskData.length; i++){
      if (taskData[i].id == task.id){
        taskData[i].executed = true;
        taskData[i].deleted = this.getCurrentDate();
        console.log(taskData[i])
        break;
      }
    }

    this.tasklist = JSON.stringify(taskData)
    window.localStorage.setItem("taskList", this.tasklist)

  }

  getCurrentDate(){
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return  date+' '+time;
  }
}
