import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  template: `
    <svg style="position: absolute" width="100%" height="100%">
      <line [attr.x1]="line.x1" [attr.y1]="line.y1"
            [attr.x2]="line.x2" [attr.y2]="line.y2"
            style="stroke:rgb(255,0,0);stroke-width:2px"/>
    </svg>
  `,
  styles: [`
    line {
      pointer-events: none;
    }
  `]
})
export class LineComponent implements OnInit {
  @Input() line: any;

  ngOnInit() {
  }
}
