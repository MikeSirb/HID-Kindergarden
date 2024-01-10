import {Component, OnInit} from '@angular/core';
import {BackendService} from './services/backend.service';
import {StoreService} from "./services/store.service";
import {AlertService} from "./services/alert.service";
import {ConfigService} from "./services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private backendService: BackendService, public storeService: StoreService,
              public alertService: AlertService) {
  }

  ngOnInit(): void {
    this.storeService.kindergardenAreLoading = true;
    this.backendService.getKindergardens();
  }

}
