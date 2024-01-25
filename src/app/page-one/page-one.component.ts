import { Component } from '@angular/core';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  panelOpenState = false;
  step = 0;

  title = 'DATA TABLE AND FILTERS';

  constructor(private sharedService: SharedService) {
    sharedService.pageTitle.next('DATA TABLE AND FILTERS');
  }
}
