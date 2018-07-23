import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentElement = {
    color: 'Black',
    backColor: 'Teal'
  }

  onClicked(parentElementColors: {color: string, backColor: string}){
    this.parentElement.color = parentElementColors.color;
    this.parentElement.backColor = parentElementColors.backColor;
  }
}
