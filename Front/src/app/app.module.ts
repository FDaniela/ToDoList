import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StatusColumnComponent } from './components/status-column/status-column.component';
import { TaskBlockComponent } from './components/task-block/task-block.component';
import { TodoBlockComponent } from './components/todo-block/todo-block.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusColumnComponent,
    TaskBlockComponent,
    TodoBlockComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
