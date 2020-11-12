import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Range, SalesNumbersService } from '../../shared/services';

@Component({
  selector: 'app-sales-widget',
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
        <h1>Sales Numbers</h1>
        <h3>Buy: {{ minValue | currency}}</h3>
        <h3>Sell: {{ maxValue | currency}}</h3>
      </mat-card>

      <mat-card *ngIf="range$ | async as range">
        <h1>Sales Numbers</h1>
        <h3>Buy: {{ range.min | currency}}</h3>
        <h3>Sell: {{ range.max | currency}}</h3>
      </mat-card>
    </div>
  `
})
export class SalesWidgetComponent implements OnInit {
  range$: Observable<Range>;
  minValue;
  maxValue;

  constructor(private salesNumbers: SalesNumbersService) {
    this.range$ = salesNumbers.range$;
  }

  ngOnInit() {
    this.salesNumbers.range$
      .subscribe(({min, max}) => {
        this.minValue = min;
        this.maxValue = max;
      });
  }
}
