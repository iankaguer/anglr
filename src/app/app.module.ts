import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './model/task/task.component';
import { TaskFilterPipe } from './pipe/task-filter.pipe';
import { TaskFilterDelPipe } from './pipe/task-filter-del.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFilterPipe,
    TaskFilterDelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
