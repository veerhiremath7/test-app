import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

interface Project {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  foods: Project[] = [
  ];
  pageTitle$ = this.sharedService.pageTitle.asObservable();

  constructor(private sharedService: SharedService) {
    this.pageTitle$ = sharedService.pageTitle;
  }
}
