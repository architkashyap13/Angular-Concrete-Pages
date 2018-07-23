import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-demo',
  templateUrl: './attribute-directive-demo.component.html',
  styles: [`.online{
    color: white;
  }`]
})
export class AttributeDirectiveDemoComponent{

colortext = 'Green';

getColor(){
  return this.colortext;
}

}
