import {Component} from '@angular/core';
import {StoreService} from "../shared/store.service";

@Component({
    selector: 'app-kindergardens',
    templateUrl: './kindergardens.component.html',
    styleUrls: ['./kindergardens.component.scss']
})
export class KindergardensComponent {

    constructor(public storeService: StoreService) {
    }
}
