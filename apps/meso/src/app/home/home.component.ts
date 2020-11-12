import { Component, OnInit } from '@angular/core';

interface Client {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
}

const superClient: Client = {
  id: '1111',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Bacon, Inc',
}

const tango = superClient

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  echo = tango;
}
