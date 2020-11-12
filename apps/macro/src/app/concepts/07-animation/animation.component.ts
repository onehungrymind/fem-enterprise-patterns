import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { fromEvent, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

const BALL_OFFSET = 25;

interface Circle {
  x: number;
  y: number;
}

@Component({
  selector: 'app-animation',
  template: `
  <div class="container">
    <app-circle
      *ngFor="let circle of circles$ | async"
      [style.left]="circle.x + 'px'"
      [style.top]="circle.y + 'px'">
    </app-circle>
  </div>
  `
})
export class AnimationComponent implements OnInit {
  circles$: Observable<Circle[]>;

  ngOnInit() {
    this.circles$ = fromEvent(document, 'mousemove')
      .pipe(
        map((e: MouseEvent) => this.generatePosition(e)),
        scan((acc: Circle[], value: Circle) => [...acc, value], [])
      );
  }

  generatePosition(e: MouseEvent) {
    const offset = $(e.target).offset();
    return {
      x: e.clientX - offset.left - BALL_OFFSET,
      y: e.pageY - offset.top - BALL_OFFSET
    };
  }
}
