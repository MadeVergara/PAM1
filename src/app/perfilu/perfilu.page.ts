import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-perfilu',
  templateUrl: './perfilu.page.html',
  styleUrls: ['./perfilu.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void <=> *', animate('2s ease-in-out'))
    ])
  ]
})
export class PerfiluPage implements OnInit {
  animate = false;

  constructor() { }

  toggleAnimation() {
    this.animate = !this.animate;
  }


  ngOnInit() {
  }

}
