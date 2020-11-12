import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { filter, map, pairwise, startWith, tap } from 'rxjs/operators';
import { Range, SalesNumbersService } from '../../shared/services';

const MIN = 'min';
const MAX = 'max';

@Component({
  selector: 'app-slider',
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
        <h1>Sales Strategy</h1>
        <form [formGroup]="myForm">
          <input type="range" formControlName="min" [min]="min" [max]="max" [step]="step">
          <p>Buy at {{minValue | async | currency}}</p>
          <input type="range" formControlName="max" [min]="min" [max]="max" [step]="step">
          <p>Sell at {{maxValue | async | currency}}</p>
        </form>
      </mat-card>
      <app-sales-widget></app-sales-widget>
    </div>
  `
})
export class SliderComponent implements OnInit {
  myForm: FormGroup;
  minValue: Observable<number>;
  maxValue: Observable<number>;
  min = 0;
  max = 100;
  startMin = 45;
  startMax = 55;
  step = 1;

  constructor(
    private builder: FormBuilder,
    private salesNumbers: SalesNumbersService) {
  }

  ngOnInit() {
    this.myForm = this.builder.group({
      min: this.startMin,
      max: this.startMax
    });

    const valueStream = this.myForm.valueChanges
      .pipe(
        map(val => this.parseRange(val)),
        pairwise(),
        filter(([oldVal, newVal]) => this.filterMinMaxValues(oldVal, newVal)),
        map(([oldVal, newVal]) => newVal),
        tap(range => this.salesNumbers.updateRange(range))
      );

    this.minValue = valueStream
      .pipe(
        map(vals => vals.min),
        startWith(this.startMin)
      );

    this.maxValue = valueStream
      .pipe(
        map(vals => vals.max),
        startWith(this.startMax)
      );
  }

  parseRange(val): Range {
    return {
      min: parseFloat(val.min),
      max: parseFloat(val.max)
    };
  }

  filterMinMaxValues(oldVal, newVal) {
    let isValid = true;
    if (oldVal.min !== newVal.min && newVal.min > newVal.max) {
      isValid = false;
      (this.myForm.controls[MAX] as FormControl).setValue(newVal.min);
    } else if (oldVal.max !== newVal.max && newVal.max < newVal.min) {
      isValid = false;
      (this.myForm.controls[MIN] as FormControl).setValue(newVal.max);
    }
    return isValid;
  }
}
