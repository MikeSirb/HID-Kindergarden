import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public displayAlert: boolean = false;
  public title: string = "";
  public message: string = "";
  public color: string = "#3f51b5"

  changeTitleAndMessage(title: string, message: string, color: string) {
    this.title = title
    this.message = message;
    this.color = color
  }
}
