import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.css']
})
export class CustomPropertyBindingComponent {

  @Input() element: {color: String, backColor: String};

}
