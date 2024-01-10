import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../../services/config.service";
import {StoreService} from "../../../services/store.service";
import {FormBuilder} from "@angular/forms";
import {BackendService} from "../../../services/backend.service";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  public filterForm: any;

  constructor(private configService: ConfigService, public storeService: StoreService,
              private formbuilder: FormBuilder, private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.filterForm = this.formbuilder.group({
      filter: [''],
    })
  }

  onSubmit() {
    this.configService.setCurrentPage(0);
    this.configService.setFilter(this.filterForm.value.filter);
    if (this.configService.getFilter() == "0") {
      this.configService.setFilterStatus(false);
    } else {
      this.configService.setFilterStatus(true);
    }
    this.storeService.childrensAreLoading = true;
    this.backendService.getChildren().subscribe(() => {
    });

  }

}
