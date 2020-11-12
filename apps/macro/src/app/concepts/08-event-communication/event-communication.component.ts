import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../../shared/services';


@Component({
  selector: 'app-event-communication',
  template: `
    <mat-form-field class="search">
      <input name="search" [formControl]="searchControl" type="search" matInput placeholder="Notification Message">
    </mat-form-field>
    <button mat-raised-button color="accent" (click)="notify(searchControl.value)">Notify</button>
  `,
  styles: [`
    .search {
      width: 100%;
      max-width: 500px;
      margin-left: 15px;
    }

    button {
      margin-left: 15px;
    }
  `]
})
export class EventCommunicationComponent {
  searchControl: FormControl = new FormControl('');

  constructor(private notifications: NotificationService) {
  }

  notify(message) {
    this.notifications.dispatch(message);
  }
}
