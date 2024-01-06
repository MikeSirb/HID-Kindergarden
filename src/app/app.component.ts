import {Component, OnInit} from '@angular/core';
import {BackendService} from './shared/backend.service';
import {StoreService} from "./shared/store.service";
import {AlertService} from "./shared/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private backendService: BackendService, public storeService: StoreService, public alertService: AlertService) {
  }

  ngOnInit(): void {
   this.backendService.getKindergardens();
  }

}
