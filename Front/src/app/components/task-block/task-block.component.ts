import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-block',
  templateUrl: './task-block.component.html',
  styleUrls: ['./task-block.component.css']
})
export class TaskBlockComponent {

@Input()
taskTitle: string= '';

@Input()
taskDescription: string= '';

}
