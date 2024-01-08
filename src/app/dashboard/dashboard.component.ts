import {Component} from '@angular/core';
import {StoreService} from "../shared/store.service";
import {ConfigService} from "../shared/config.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public isActive: boolean  = false;

  constructor(private storeService: StoreService) {
    this.storeService.isLoading = true;

  }

  changeVisibility(status: boolean) {
    this.isActive = status;
  }
}
