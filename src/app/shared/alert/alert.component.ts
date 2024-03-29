import {Component, Input} from "@angular/core";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
  @Input() message!: string;
  @Input() title!: string;

  constructor(public alertService: AlertService) {
  }

  closeModal() {
    this.alertService.displayAlert = false;
  }

}
