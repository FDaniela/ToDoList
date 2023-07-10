import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BoardComponent } from './components/board/board.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { StatusColumnComponent } from './components/status-column/status-column.component';
import { TaskBlockComponent } from './components/task-block/task-block.component';
import { TodoBlockComponent } from './components/todo-block/todo-block.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
 

@NgModule({
  declarations: [
    AppComponent,
    StatusColumnComponent,
    TaskBlockComponent,
    TodoBlockComponent,
    BoardComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    DragDropModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
