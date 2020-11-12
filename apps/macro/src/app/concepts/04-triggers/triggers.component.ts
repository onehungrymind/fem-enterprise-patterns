import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-triggers',
  template: `
    <div #ball class="ball"
         [style.left]="position.x + 'px'"
         [style.top]="position.y + 'px'">
    </div>
  `
})
export class TriggersComponent implements AfterViewInit {
  @ViewChild('ball') ball;
  position: any = { x: 100, y: 100 };

  ngAfterViewInit() {
    const BALL_OFFSET = 50;

    const move$ = fromEvent(document, 'mousemove')
      .pipe(
        map((event: MouseEvent) => {
          const offset = $(event.target).offset();
          return {
            x: event.clientX - offset.left - BALL_OFFSET,
            y: event.pageY - BALL_OFFSET
          };
        })
      );

    const down$ = fromEvent(this.ball.nativeElement, 'mousedown')
      .pipe(tap(event => this.ball.nativeElement.style.pointerEvents = 'none'));

    const up$ = fromEvent(document, 'mouseup')
      .pipe(tap(event => this.ball.nativeElement.style.pointerEvents = 'all'));

    down$.pipe(
        switchMap(event => move$.pipe(takeUntil(up$))),
        startWith({x: 100, y: 100})
      )
      .subscribe(position => this.position = position);
  }
}
