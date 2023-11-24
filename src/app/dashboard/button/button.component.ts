import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() toggleForms = new EventEmitter();
  @Input() status: boolean | undefined;
  public statusText: string = "schließen"
  public statusColor: string = "primary";

  onClick() {
    this.toggleForms.emit(!this.status);

    setTimeout(() =>
    {
      this.statusText = this.status ? "schließen" : "öffnen";
      this.statusColor = this.status ? "primary" : "warn";
    }, 100)

  }



}
