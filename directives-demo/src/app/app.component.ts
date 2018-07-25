import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.oddClass{
    color: red;
  }`]
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNo = [1, 3, 5];
  evenNo = [2, 4];
  onlyOdd = false;
}
