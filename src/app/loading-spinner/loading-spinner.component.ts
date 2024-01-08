import { Component } from '@angular/core';
import {ConfigService} from "../shared/config.service";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  constructor(public configService: ConfigService){}
}
