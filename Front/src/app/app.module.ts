import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskBlockComponent } from './components/task-block/task-block.component';
import { TodoBlockComponent } from './components/todo-block/todo-block.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskBlockComponent,
    TodoBlockComponent,
    SideBarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
