import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent {
  @Input() message!: string;
  @Input() title!: string;
  @Output() closeModalEvent = new EventEmitter<boolean>();


/*
  public modalDiv: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.modalDiv = document.getElementById('myModal');
    if (this.modalDiv != null) {
      this.modalDiv.style.display = 'block';
    }
  }
*/

  closeModal() {
      this.closeModalEvent.emit(false);
  }

}
