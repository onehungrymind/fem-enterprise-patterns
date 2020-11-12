import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-shot',
  template: `<div #shot class="shot"></div>`,
  styles: [`
    .shot {
      pointer-events: none;
      position: absolute;
      width: 5px;
      height: 10px;
      background: cyan;
      border-radius: 2px;
    }
  `]
})

export class ShotComponent implements AfterViewInit {
  @ViewChild('shot') shot;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  ngAfterViewInit() {
    TweenMax.to(this.shot.nativeElement, 2, {
      top: -1000, onComplete: _ => this.remove.emit()
    });
  }
}
