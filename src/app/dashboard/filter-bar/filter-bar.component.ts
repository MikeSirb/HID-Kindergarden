import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../shared/config.service";
import {StoreService} from "../../shared/store.service";
import {FormBuilder} from "@angular/forms";
import {BackendService} from "../../shared/backend.service";

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
        this.configService.setFilter(this.filterForm.value.filter);
        if (this.configService.getFilter() === "") {
            this.configService.setFilterStatus(false);
        } else {
            this.configService.setCurrentPage(0);
            this.configService.setFilterStatus(true)
            this.storeService.isLoading = true;
            this.backendService.getChildren().subscribe(() => {
            });
        }

    }

}
