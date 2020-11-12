import { animate, style, transition, trigger } from '@angular/animations';

export const slideshowAnimation = trigger('imageChange', [
  transition('void => left', [
    style({transform: 'translateX(100vw)'}),
    animate('300ms ease-in-out')
  ]),
  transition('left => void', [
    animate('300ms ease-in-out', style({transform: 'translateX(-100vw)'}))
  ]),
  transition('void => right', [
    style({transform: 'translateX(-100vw)'}),
    animate('300ms ease-in-out')
  ]),
  transition('right => void', [
    animate('300ms ease-in-out', style({transform: 'translateX(100vw)'}))
  ])
]);
