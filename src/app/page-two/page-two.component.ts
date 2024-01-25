import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  title = 'DATA TABLE AND FILTERS';

  constructor(private sharedService: SharedService) {
    sharedService.pageTitle.next('DETAILS LAYOUT');
  }
}
