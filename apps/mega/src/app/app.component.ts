import { Component } from '@angular/core';


export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavStatus = SidenavStatus.OPENED;

  toggleSidenav() {
    this.sidenavStatus =
      this.sidenavStatus === SidenavStatus.OPENED
        ? SidenavStatus.CLOSED
        : SidenavStatus.OPENED;
  }
}
