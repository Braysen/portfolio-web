import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 0
      })),
    transition('void => *', [
      style({
        transform: 'translateX(-100%)',
        opacity: 0
      }),
      animate(800)
    ]),
    transition('* => void', [
      animate(800, style({
        transform: 'translateX(100%)',
        opacity: 1
      }))
    ])
    ])
  ]
})
export class HomeComponent{
}
