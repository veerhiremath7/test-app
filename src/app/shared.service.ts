import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  pageTitle = new BehaviorSubject('');

  // pageTitle$ = this.pageTitle.asObservable();
  constructor() { }
}
