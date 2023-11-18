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

  async onClick() {
    console.log(this.status)
    this.toggleForms.emit(!this.status);

    async function delay() {
      return new Promise(resolve => setTimeout(resolve, 50));
    }

    await delay();

    console.log(this.status)
    this.statusText = this.status ? "schließen" : "öffnen";
  }



}
