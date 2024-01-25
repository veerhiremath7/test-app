import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavWidth = 48;


  increase() {
    this.sidenavWidth = 150;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 48;
    console.log('decrease sidenav width');
  }
}
