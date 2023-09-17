import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  showMenu: BehaviorSubject<boolean>;
  constructor() {
    this.showMenu = new BehaviorSubject(true);
  }

  hide() {
    this.showMenu.next(false);
  }

  show() {
    this.showMenu.next(true);
  }
}
