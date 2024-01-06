import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ConfigService} from "../../shared/config.service";
import {Child} from "../../shared/interfaces/Child";
import {AlertService} from "../../shared/alert.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  @ViewChild('paginator', {static: true}) paginator!: MatPaginator;

  pageSizeOptions: number[] = [2, 5, 10, 15];
  removingChildId: string = "";

  constructor(public storeService: StoreService, private backendService: BackendService, public configService: ConfigService, public alertService: AlertService) {
  }

  ngOnInit(): void {
    this.backendService.getChildren().subscribe(() => {
    })
    this.paginator._intl.itemsPerPageLabel = "Kinder pro Seite: ";

  }

  public cancelRegistration(child: Child) {
    this.removingChildId = child.id;
    this.storeService.isRemoving = true;
    this.backendService.deleteChildData(child);

    setTimeout(() => {
      this.alertService.displayAlert = false;
    }, 10000)


  }

  handlePageEvent(event: PageEvent) {
    this.configService.setChildrenPerPage(event.pageSize);
    this.configService.setCurrentPage(event.pageIndex);
    this.backendService.getChildren().subscribe(() => {
    })
  }

  getAge(birthDate: string) {
    var today = new Date();
    var birthDateTimestamp = new Date(birthDate);
    var age = today.getFullYear() - birthDateTimestamp.getFullYear();
    var m = today.getMonth() - birthDateTimestamp.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateTimestamp.getDate())) {
      age--;
    }
    return age;
  }

}


