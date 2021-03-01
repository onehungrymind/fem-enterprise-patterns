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
    // -------------------------------------------------------------------
    // CHALLENGE: Own that Input!
    // -------------------------------------------------------------------
    // Capture the searchControl output and input it into queryString
    // Map the output to all uppercase letters
    // Reverse the output i.e. Lukas becomes sakuL
    // BONUS: How would you URL encode the output?
    // -------------------------------------------------------------------
  }
}
