import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public displayAlert: boolean = false;
  public title: string = "";
  public message: string = "";

  changeTitleAndMessage(title: string, message: string) {
    this.title = title
    this.message = message;
  }
}
