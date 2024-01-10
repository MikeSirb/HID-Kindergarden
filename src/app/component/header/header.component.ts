import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public title: string = "Mike's Elite-Kindergarten-App";
  public imagePath: string = "./../assets/images/kindergarden.jpg";

}
