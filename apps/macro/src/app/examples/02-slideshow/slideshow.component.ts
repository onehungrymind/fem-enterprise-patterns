import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
import { slideshowAnimation } from './slideshow.animations';

const images: string[] = [
  'assets/lion-roar.jpg',
  'assets/maxres.jpg',
  'assets/maxresdefault.jpg'
];

interface Move {
  shift: number;
  direction: Direction;
}

interface Position {
  index: number;
  direction: Direction;
}

enum Direction {
  left = 'left',
  right= 'right'
}

@Component({
  selector: 'app-slideshow',
  styleUrls: ['./slideshow.component.css'],
  templateUrl: './slideshow.component.html',
  animations: [slideshowAnimation]
})
export class SlideshowComponent implements AfterViewInit {
  @ViewChild('previous') previous;
  @ViewChild('next') next;

  images: string[] = images;
  currentPosition: Position = {
    index: 0,
    direction: Direction.left
  };

  ngAfterViewInit() {
    // NOTE: The reason we are keeping track of direction is so that animations work
    const previous$ = fromEvent(this.getNativeElement(this.previous), 'click').pipe(
      map(event => ({ shift: -1, direction: Direction.right }))
    );

    const next$ = fromEvent(this.getNativeElement(this.next), 'click').pipe(
      map(event => ({ shift: 1, direction: Direction.left }))
    );

    merge(previous$, next$)
      .pipe(
        startWith(this.currentPosition),
        scan((acc: Position, value: Move) => {
          const adjustedIndex = this.getAdjustedIndex(acc.index, value.shift);
          return { index: adjustedIndex, direction: value.direction };
        })
      )
      .subscribe((position: Position) => (this.currentPosition = position));
  }

  getAdjustedIndex(current, shift) {
    const projectedIndex = current + shift;
    const length = this.images.length;
    return this.adjustForMinIndex(length, this.adjustForMaxIndex(length, projectedIndex));
  }

  adjustForMinIndex(length, index) {
    return index < 0 ? length - 1 : index;
  }

  adjustForMaxIndex(length, index) {
    return index >= length ? 0 : index;
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
