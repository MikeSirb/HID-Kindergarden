import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public isActive = true;
  public currentPage: number = 1;

  receiveMessage(newPageCount: number) {
    this.currentPage = newPageCount;
  }

  changeVisibility(status: boolean) {
    this.isActive = status;
  }
}
