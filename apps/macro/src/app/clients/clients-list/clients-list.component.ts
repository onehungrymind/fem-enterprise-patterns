import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../shared/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {
  @Input() clients: Client[];
  @Input() readOnly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
