import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Range {
  min: number;
  max: number;
}

@Injectable({
  providedIn: 'root'
})
export class SalesNumbersService {
  private range: Subject<Range> = new Subject();
  range$ = this.range.asObservable();

  updateRange(range) {
    this.range.next(range);
  }
}
