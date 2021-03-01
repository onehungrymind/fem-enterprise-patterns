import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';
import * as $ from 'jquery';

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

@Component({
  selector: 'app-map',
  styles: [`
    mat-card {
      width: 100%;
      box-sizing: border-box;
      margin: 16px;
      background: #fff url(assets/london-map.jpg);
      background-size: cover;
    }

    .card-container {
      display: flex;
      flex-flow: row wrap;
      position: fixed;
      top: 70px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card>
        <app-line *ngFor="let line of lines" [line]="line"></app-line>
      </mat-card>
    </div>
  `
})
export class MapComponent implements OnInit {
  lines: Line[] = [];

  ngOnInit() {
    // -------------------------------------------------------------------
    // CHALLENGE: Map your route / Map your getaway
    // -------------------------------------------------------------------
    // Create the stream needed to click to draw a straight line
    // Process the stream appropriately
    // Update the stream to accommodate fluid lines
    // Helper functions have been given to help keep you focused
    // -------------------------------------------------------------------
  }

  generatePosition(e: MouseEvent) {
    const offset = $(e.target).offset();
    return {
      x: e.clientX - offset.left,
      y: e.pageY - offset.top
    };
  }

  generateCoordinates(start, end): Line {
    return { x1: start.x, y1: start.y, x2: end.x, y2: end.y };
  }
}
