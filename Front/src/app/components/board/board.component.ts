import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {

  board: Board = new Board('Test Board', [

    new Column('To Do', [
      'Lorem ipsum', 
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum'
    ]),

    new Column('In Progress', [
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Lorem ipsum',
    ]),
    
    new Column('Done', [
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
    ]),

  ]);

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }
}
