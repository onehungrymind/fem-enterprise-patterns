import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, merge } from 'rxjs';
import { filter, map, mapTo, repeat, scan, startWith, take } from 'rxjs/operators';

const SPACESHIP_WIDTH_OFFSET = 40;
const BG_START = 1100;
const BG_END = 1178;

interface Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-game',
  styles: [`
    mat-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
      background: white url('assets/stars.jpg') repeat-y 0 0;
      background-size: cover;
      overflow: hidden;
    }

    .card-container {
      display: flex;
      flex-flow: row wrap;
      position: fixed;
      top: 70px;
      bottom: 0;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card [style.background-position-y]="backgroundPosition + 'px'">
        <div #spaceship class="spaceship"
             [style.left]="shipPosition.x + 'px'"
             [style.top]="shipPosition.y + 'px'">
        </div>
        <app-shot *ngFor="let shot of shots"
                  [style.left]="shot?.x + 'px'"
                  [style.top]="shot?.y + 'px'">
        </app-shot>
      </mat-card>
    </div>
  `
})
export class GameComponent implements OnInit, OnDestroy {
  backgroundPosition = 0;
  shipPosition: Coordinate = { x: 100, y: 400 };
  shots: Coordinate[] = [];

  background$;
  shots$;
  leftArrow$;
  rightArrow$;

  ngOnInit() {
    this.background$ = interval(10)
      .pipe(
        startWith(BG_START),
        take(BG_END),
        repeat()
      )
      .subscribe(count => this.backgroundPosition = count);

    this.shots$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'Control'),
        map((event: KeyboardEvent) => ({
          x: this.shipPosition.x + SPACESHIP_WIDTH_OFFSET,
          y: this.shipPosition.y
        }))
      )
      .subscribe(shot => this.shots = [...this.shots, shot]);

    // -------------------------------------------------------------------
    // CHALLENGE: Ready Player?
    // -------------------------------------------------------------------
    // Complete the leftArrow$ stream to capture the correct keystroke
    // Complete the rightArrow$ stream to capture the correct keystroke
    // Complete the leftArrow$ stream to pass the appropriate value
    // Complete the rightArrow$ stream to pass the appropriate value
    // Add a scan function to act on the stream data in the merge operator
    // -------------------------------------------------------------------
    this.leftArrow$ = fromEvent(document, 'keydown')
      .pipe(
        // SOMETHING GOES HERE!
      );

    this.rightArrow$ = fromEvent(document, 'keydown')
      .pipe(
        // SOMETHING GOES HERE!
      );

    merge(this.leftArrow$, this.rightArrow$)
      .pipe(
        startWith(this.shipPosition),
        // SOMETHING GOES HERE!
      )
      .subscribe(position => this.shipPosition = position);
  }

  ngOnDestroy() {
    this.background$.unsubscribe();
    this.shots$.unsubscribe();
  }

  increment(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] + value});
  }

  decrement(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] - value});
  }
}
