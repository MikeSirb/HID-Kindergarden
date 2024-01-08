import {Component} from '@angular/core';
import {StoreService} from "../shared/store.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  items = new Array(4).fill({})

}
