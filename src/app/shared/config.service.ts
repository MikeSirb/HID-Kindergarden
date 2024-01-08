import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private childrenPerPage: number = 5;
  private currentPage: number = 0;
  private filterStatus: boolean = false;
  private filter: string = "";
  private bigSize:number = 200;
  private smallSize: number = 30;
  private spinnerSize: number = this.bigSize;


  getChildrenPerPage(): number {
    return this.childrenPerPage;
  }

  setChildrenPerPage(value: number): void {
    this.childrenPerPage = value;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentPage(value: number) {
    this.currentPage = value;
  }

  getFilterStatus(): boolean {
    return this.filterStatus;
  }

  setFilterStatus(value: boolean): void {
    this.filterStatus = value;
  }

  getFilter(): string {
    return this.filter;
  }

  setFilter(value: string) {
    this.filter = value;
  }

  getSpinnerSize(): number {
    return this.spinnerSize;
  }

  setSpinnerBiggerSize() {
    this.spinnerSize = this.bigSize;
  }

  setSpinnerSmallerSize() {
    this.spinnerSize = this.smallSize;
  }
}
