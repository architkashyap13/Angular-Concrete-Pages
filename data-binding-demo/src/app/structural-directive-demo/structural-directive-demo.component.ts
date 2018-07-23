import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styles: [`.online{
    color: white;
  }`]
})
export class StructuralDirectiveDemoComponent{

  visibleStatus = false;

  changeVisibleStatus(){
    this.visibleStatus = true;
  }

  colors = ['Red', 'Blue', 'Purple'];

}
