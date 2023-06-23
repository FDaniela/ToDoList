import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusColumnComponent } from './components/status-column/status-column.component';
import { TaskBlockComponent } from './components/task-block/task-block.component';
import { TodoBlockComponent } from './components/todo-block/todo-block.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusColumnComponent,
    TaskBlockComponent,
    TodoBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
