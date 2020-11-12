import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/models/client.model';
import { Observable } from 'rxjs';
import { Store } from '../shared/services/';

import * as ClientActions from '../shared/actions/client.actions';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;
  currentClient$: Observable<Client>;

  constructor(private store: Store) {
    this.clients$ = this.store.select('clients');
    this.currentClient$ = this.store.select('currentClient');
  }

  ngOnInit() {
    this.store.dispatch(new ClientActions.LoadAction());
    this.resetCurrentClient();
  }

  resetCurrentClient() {
    const newClient: Client = { id: null, firstName: '', lastName: '', company: '' };
    this.store.dispatch(new ClientActions.SelectAction(newClient));
  }

  setCurrentClient(client) {
    this.store.dispatch(new ClientActions.SelectAction(client));
  }

  cancel() {
    this.resetCurrentClient();
  }

  saveClient(client) {
    if (!client.id) {
      this.createClient(client);
    } else {
      this.updateClient(client);
    }
  }

  createClient(client) {
    this.store.dispatch(new ClientActions.CreateAction(client));
    this.resetCurrentClient();
  }

  updateClient(client) {
    this.store.dispatch(new ClientActions.UpdateAction(client));
    this.resetCurrentClient();
  }

  deleteClient(client) {
    this.store.dispatch(new ClientActions.DeleteAction(client));
    this.resetCurrentClient();
  }
}
