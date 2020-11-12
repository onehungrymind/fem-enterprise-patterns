import { Component, OnInit } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { filter, mapTo, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-map-to-functions',
  template: `
  <div class="container">
    <div #ball class="ball"
      [style.left]="position.x + 'px'"
      [style.top]="position.y + 'px'">
    </div>
  </div>
  `
})
export class MapToFunctionsComponent implements OnInit {
  position: any;

  ngOnInit() {
    const leftArrow$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ArrowLeft'),
        mapTo(position => this.decrement(position, 'x', 10))
      );

    const rightArrow$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ArrowRight'),
        mapTo(position => this.increment(position, 'x', 10))
      );

    const upArrow$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ArrowUp'),
        mapTo(position => this.decrement(position, 'y', 10))
      );

    const downArrow$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ArrowDown'),
        mapTo(position => this.increment(position, 'y', 10))
      );

    merge(leftArrow$, rightArrow$, upArrow$, downArrow$)
      .pipe(
        startWith({x: 100, y: 100}),
        scan((acc: any, curr: Function) => curr(acc))
      )
      .subscribe(position => this.position = position);
  }

  increment(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] + value});
  }

  decrement(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] - value});
  }
}
