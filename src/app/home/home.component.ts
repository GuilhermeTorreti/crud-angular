import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  showMenu!: boolean;
  subscriptionShowMenu!: Subscription;

  constructor(private homeService: HomeService){
    this.subscriptionShowMenu = this.homeService.showMenu?.subscribe(
      (value) => {
        this.showMenu = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionShowMenu.unsubscribe();
  }
}
