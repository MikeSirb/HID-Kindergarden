// config.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private childrenPerPage: number = 5;

  getChildrenPerPage(): number {
    return this.childrenPerPage;
  }

  setChildrenPerPage(value: number): void {
    this.childrenPerPage = value;
  }
}
