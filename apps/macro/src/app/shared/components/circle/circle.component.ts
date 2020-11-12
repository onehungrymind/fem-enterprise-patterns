import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-circle',
  template: `<div #circle class="circle"></div>`
})
export class CircleComponent implements AfterViewInit {
  @ViewChild('circle') circle;

  ngAfterViewInit() {
    TweenMax.to(this.circle.nativeElement, 2,
      {alpha: 0, width: 0, height: 0});
  }
}
