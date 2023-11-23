import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { CHILDREN_PER_PAGE } from 'src/app/shared/constants';
import { StoreService } from 'src/app/shared/store.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  public page: number = 0;
  pageSizeOptions = [2, 4, 5];
  CHILDREN_PER_PAGE = CHILDREN_PER_PAGE;


  ngOnInit(): void {
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

  public cancelRegistration(childId: string) {
    this.backendService.deleteChildData(childId, this.currentPage);
  }

  handlePageEvent(event: PageEvent) {

    console.log(this.currentPage)
    this.currentPage = event.pageIndex;
    this.selectPageEvent.emit(this.currentPage)
    this.backendService.getChildren(this.currentPage);
    console.log(this.currentPage)
  }

}


