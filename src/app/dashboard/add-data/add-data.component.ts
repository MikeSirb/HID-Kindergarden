import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';
import {CustomErrorStateMatcher} from "./custom-state-matcher";
import {ErrorStateMatcher} from "@angular/material/core";
import {AlertService} from "../../shared/alert.service";
import {Child} from "../../shared/interfaces/Child";
import {ConfigService} from "../../shared/config.service";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}
  ]
})
export class AddDataComponent implements OnInit {

  public addChildForm: any;

  minAge: number = 3;
  maxAge: number = 5;
  datePickerDate!: Date;

  constructor(private formbuilder: FormBuilder, public storeService: StoreService,
              public backendService: BackendService, public alertService: AlertService) {
  }

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, [Validators.required, this.checkTheAge.bind(this)]]
    })

    this.datePickerDate = this.getDatePickerDate();
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      const transformedName = this.transformName(this.addChildForm.value.name);
      this.addChildForm.patchValue({ name: transformedName });

      const currentDate: Date = new Date();
      console.log(currentDate);
      this.storeService.isLoading = true;
      this.backendService.addChildData(this.addChildForm.value, currentDate);


      this.addChildForm.reset();

      setTimeout(() => {
        this.alertService.displayAlert = false;
      }, 10000);
    }
  }

  transformName(name: string): string {
    const names = name.split(' ');
    const transformedNames = names.map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase());

    return transformedNames.join(' ');
  }

  checkTheAge(control: FormControl): { [key: string]: boolean } | null {
    if (control.value !== null) {
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

  getDatePickerDate() {
    const currentDate = new Date();
    const threeYearsAgo = new Date(currentDate);
    threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);

    return threeYearsAgo;
  }

}
