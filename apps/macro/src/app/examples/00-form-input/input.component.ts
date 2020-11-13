import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field class="search">
      <input
        name="search"
        [formControl]="searchControl"
        type="search"
        matInput
        placeholder="Search Query"
      />
    </mat-form-field>
    <h3>{{ queryString }}</h3>
  `,
  styles: [
    `
      .search {
        width: 100%;
        max-width: 500px;
        margin-left: 15px;
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  queryString;

  ngOnInit() {
    this.searchControl.valueChanges // initial output
      .pipe(
        map(query => query.toUpperCase())
      )
      .subscribe(query => this.queryString = query); // final input
  }
}
