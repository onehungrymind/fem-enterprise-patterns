import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject();
  notifications$ = this.subject.asObservable();

  dispatch(notification) {
    this.subject.next(notification);
  }
}
