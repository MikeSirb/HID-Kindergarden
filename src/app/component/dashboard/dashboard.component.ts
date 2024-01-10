import {Component} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public isActive: boolean = false;

  constructor(private storeService: StoreService) {
    this.storeService.childrensAreLoading = true;
  }

  changeVisibility(status: boolean) {
    this.isActive = status;
  }
}
