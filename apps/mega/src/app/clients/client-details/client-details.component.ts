import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../shared/models/client.model';

@Component({
  selector: 'fem-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {
  originalName;
  currentClient: Client;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set client(value) {
    if (value) { this.originalName = `${value.firstName} ${value.lastName}`; }
    this.currentClient = Object.assign({}, value);
  }
}
