import {AfterViewInit, Component, Input} from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']

})

export class AlertComponent implements AfterViewInit {
  @Input() message!: string;
  @Input() title!: string;

  public modalDiv: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.modalDiv = document.getElementById('myModal');
    if (this.modalDiv != null)
      this.modalDiv.style.display = 'block';
  }

}
