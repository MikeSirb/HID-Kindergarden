import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';
import {CustomErrorStateMatcher} from "./custom-state-matcher";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
    selector: 'app-add-data',
    templateUrl: './add-data.component.html',
    styleUrls: ['./add-data.component.scss'],
    providers: [
        {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}
    ]
})
export class AddDataComponent implements OnInit {

    @Input() currentPage!: number;
    public addChildForm: any;
    displayAlert: boolean = false;
    message: string = '';
    title: string = 'Information zur Anmeldung'

    minAge: number = 3;
    maxAge: number = 5;
    datePickerDate!: Date;

    constructor(private formbuilder: FormBuilder, public storeService: StoreService, public backendService: BackendService) {}

    ngOnInit(): void {
        this.addChildForm = this.formbuilder.group({
            name: ['', [Validators.required]],
            kindergardenId: ['', Validators.required],
            birthDate: [null, [Validators.required, this.checkTheAge.bind(this)]]
        })

        this.datePickerDate = this.getDatePickerDate();
    }

    onSubmit() {
        if (this.addChildForm.valid) {
            this.backendService.addChildData(this.addChildForm.value, this.currentPage);

            this.message = `${this.addChildForm.value.name} : wurde erfolgreich im Kindergarten angemeldet!`
            this.displayAlert = true;
            this.addChildForm.reset();

            setTimeout(() => {
                this.displayAlert = false;
            }, 10000)
        }
    }

    checkTheAge(control: FormControl): { [key: string]: boolean } | null {
        if(control.value !== null) {
            const age = this.getAge(control);

            if (age < this.minAge) {
                return {"invalidMinAge": true}
            }
            if (age >= this.maxAge) {
                return {"invalidMaxAge": true}
            }
        }
        return null;
    }

    getAge(control: FormControl): number {
        let today = new Date();
        let birthDateTimestamp = new Date(control.value);
        let age = today.getFullYear() - birthDateTimestamp.getFullYear();
        let m = today.getMonth() - birthDateTimestamp.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDateTimestamp.getDate())) {
            age--;
        }
        return age;
    }

    closeAlerts(event: boolean) {
        this.displayAlert = event;
    }

    getDatePickerDate() {
        const currentDate = new Date();
        const threeYearsAgo = new Date(currentDate);
        threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);

        return threeYearsAgo;
    }

}
