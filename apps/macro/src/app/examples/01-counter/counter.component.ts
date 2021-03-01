import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/index';
import { scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  styles: [`
    mat-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
    }

    .card-container {
      display: flex;
      flex-flow: row wrap;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card>
        <div>
          <h2>Activate Beast Mode!</h2>
          <button #btn mat-raised-button color="accent">Click me!</button>
        </div>
      </mat-card>
      <mat-card>
        <div>
          <h2>Beast Mode Activated</h2>
          <strong>{{count}} times!</strong>
        </div>
      </mat-card>
    </div>
  `
})
export class CounterComponent implements AfterViewInit {
  @ViewChild('btn') btn;
  count = 0;

  ngAfterViewInit() {
    // -------------------------------------------------------------------
    // CHALLENGE: Go Beast Mode By 1!
    // -------------------------------------------------------------------
    // Capture the btn click and increment count by 1
    // -------------------------------------------------------------------
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
