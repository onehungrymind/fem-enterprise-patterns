import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

interface Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-maintaining-state',
  template: `
    <button #right mat-raised-button color="accent">Move Right</button>
    <div class="container">
      <div #ball class="ball"
           [style.left]="position.x + 'px'"
           [style.top]="position.y + 'px'">
      </div>
    </div>
  `
})
export class MaintainingStateComponent implements AfterViewInit {
  @ViewChild('right') right;
  position: any = { x: 100, y: 150 };

  ngAfterViewInit() {
    fromEvent(this.getNativeElement(this.right), 'click')
      .pipe(
        map(event => 10),
        startWith({x: 100, y: 150}),
        scan((acc: Coordinate, curr: number) => Object.assign({}, acc, {x: acc.x + curr}))
      )
      .subscribe(position => this.position = position);
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
