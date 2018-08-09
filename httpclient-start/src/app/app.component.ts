import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({

      apiKey: "AIzaSyCTM1zwLloonp_aDL1AuiWZTIJlZvjp4qM",
      authDomain: "ng-http-demo-f0f24.firebaseapp.com",

    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
