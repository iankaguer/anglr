import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilterDel',
  pure: false
})
export class TaskFilterDelPipe implements PipeTransform {

  transform(tasks: any[], filter: String): any {
    return tasks.filter(task => task.deleted !== "");
  }

}
