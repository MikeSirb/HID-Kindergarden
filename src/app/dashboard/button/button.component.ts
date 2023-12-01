import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Output() toggleForms = new EventEmitter();
  @Input() status!: boolean;
  public statusText: string = "Öffnen"
  public statusColor: string = "warn";

  onClick() {
    this.toggleForms.emit(!this.status);

    setTimeout(() => {
      this.statusText = this.status ? "Schließen" : "Öffnen";
      this.statusColor = this.status ? "primary" : "warn";
    }, 100)

  }


}
