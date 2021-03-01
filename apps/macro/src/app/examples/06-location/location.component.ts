import { Component, OnInit, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
import * as $ from 'jquery';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const PIN_OFFSET_X = 40;
const PIN_OFFSET_Y = 60;

@Component({
  selector: 'app-location',
  styles: [`
    .card-container {
      position: fixed;
      top: 70px;
      bottom: 0;
      left: 0;
      right: 0;
    }

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
    }
  `],
  template: `
    <div class="card-container">
      <mat-card>
        <div #pin class="pin">
        </div>
      </mat-card>
    </div>
  `
})
export class LocationComponent implements OnInit {
  @ViewChild('pin') pin;

  ngOnInit() {
    // -------------------------------------------------------------------
    // CHALLENGE: Share your location
    // -------------------------------------------------------------------
    // Create the stream that captures your click coordinates
    // Process the stream appropriately
    // At the end of the stream, animate the pin to your location
    // TweenMax.to(this.pin.nativeElement, 1, position)
    // -------------------------------------------------------------------
  }

  generatePosition(e: MouseEvent) {
    const offset = $(e.target).offset();
    return {
      x: e.clientX - offset.left - PIN_OFFSET_X,
      y: e.pageY - offset.top - PIN_OFFSET_Y
    };
  }
}
