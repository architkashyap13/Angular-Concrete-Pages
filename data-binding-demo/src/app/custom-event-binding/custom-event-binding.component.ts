import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  templateUrl: './custom-event-binding.component.html',
  styleUrls: ['./custom-event-binding.component.css']
})
export class CustomEventBindingComponent{

@Output() clicked = new EventEmitter<{color: String, backColor: String}>();

onClick(){
  this.clicked.emit({color: 'white', backColor: 'brown'});
}

}
