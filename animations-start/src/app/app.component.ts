import { Component, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '../../node_modules/@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      }))
      transition('normal <=> highlighted', animate(500))
      //transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0px) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0px) scale(0.5)'
      }))
      transition('normal => highlighted', animate(500)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        animate(1000,style({
          'background-color': 'orange'
        })),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [        
        animate(500, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ]),
    ]),
  ]
})
export class AppComponent {
  state="normal";
  wildState="normal";

  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.state = (this.state === 'normal') ? 'highlighted':'normal';
      this.wildState = (this.wildState === 'normal') ? 'highlighted':'normal';
    }

    onShrink(){
      this.wildState="shrunken";
    }

    onDelete(item: string){
      this.list.splice(this.list.indexOf(item), 1);
    }
}
