import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';
import {PageEvent} from "@angular/material/paginator";
import {ConfigService} from "../../shared/config.service";
import {Child, ChildResponse} from "../../shared/interfaces/Child";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(public storeService: StoreService, private backendService: BackendService, public configService: ConfigService) {
  }

  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  pageSizeOptions: number[] = [2, 5, 10, 15];
  public message: string = "wurde erfolgreich vom Kindergarten abgemeldet"
  title: string = 'Information zur Abmeldung'
  isSubmitted: boolean = false;


  ngOnInit(): void {
    this.backendService.getChildren(this.currentPage);
  }

  public cancelRegistration(childId: string) {
    this.backendService.deleteChildData(childId, this.currentPage);

    this.storeService.children.filter((child) => {
      if (child.id === childId)
        this.message = `${child.name} wurde erfolgreich vom Kindergarten abgemeldet`;
    });

    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000)
  }

  handlePageEvent(event: PageEvent) {

    this.configService.setChildrenPerPage(event.pageSize);
    this.currentPage = event.pageIndex;
    this.selectPageEvent.emit(this.currentPage)
    this.backendService.getChildren(this.currentPage);
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


