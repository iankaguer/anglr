import { Pipe, PipeTransform } from '@angular/core';
import {TaskItem} from "../model/task/task";

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(tasks: any[], filter: String): any {
    return tasks.filter(task => task.deleted == "");
  }

}
