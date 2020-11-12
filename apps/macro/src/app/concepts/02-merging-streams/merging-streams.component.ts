import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

interface Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-merging-streams',
  template: `
    <!-- TODO: Fix this inline style -->
    <button [style.margin-right]="'10px'" #left mat-raised-button color="accent">Move Left</button>
    <button #right mat-raised-button color="accent">Move Right</button>
    <div class="container">
      <div #ball class="ball"
           [style.left]="position.x + 'px'"
           [style.top]="position.y + 'px'">
      </div>
    </div>
  `
})
export class MergingStreamsComponent implements AfterViewInit {
  @ViewChild('left') left;
  @ViewChild('right') right;
  position: Coordinate = { x: 200, y: 200 };

  ngAfterViewInit() {
    const right$ = fromEvent(this.getNativeElement(this.right), 'click')
      .pipe(map(event => 10));

    const left$ = fromEvent(this.getNativeElement(this.left), 'click')
      .pipe(map(event => -10));

    merge(left$, right$)
      .pipe(
        startWith(this.position),
        scan((acc: Coordinate, curr: number) => Object.assign({}, acc, {x: acc.x + curr}))
      )
      .subscribe(position => this.position = position);
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
