import { Component, OnInit, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
import * as $ from 'jquery';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const BALL_OFFSET = 50;
const CURSOR_OFFSET = 20;

@Component({
  selector: 'app-simple-animation',
  template: `<div #ball class="ball"></div>`,
})
export class SimpleAnimationComponent implements OnInit {
  @ViewChild('ball') ball;

  ngOnInit() {
    fromEvent(document, 'click')
      .pipe(map((e: MouseEvent) => this.generatePosition(e)))
      .subscribe(position => TweenMax.to(this.ball.nativeElement, 1, position));
  }

  generatePosition(e: MouseEvent) {
    const offset = $(e.target).offset();
    return {
      x: e.clientX - offset.left - BALL_OFFSET - CURSOR_OFFSET,
      y: e.pageY - offset.top - BALL_OFFSET - CURSOR_OFFSET,
    };
  }
}
