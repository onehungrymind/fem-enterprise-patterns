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
    // -------------------------------------------------------------------
    // CHALLENGE: Get the Slideshow Working
    // -------------------------------------------------------------------
    // Create a previous$ stream to capture the previous button click
    // Create a next$ stream to capture the next button click
    // Pass an object that looks like this { shift: -1, direction: Direction.right }
    // Combine both streams to update the same slideshow
    // -------------------------------------------------------------------
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
