import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-column',
  templateUrl: './status-column.component.html',
  styleUrls: ['./status-column.component.css']
})
export class StatusColumnComponent {

@Input()
columnTitle: string= '';

}
