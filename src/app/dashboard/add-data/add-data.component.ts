import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit, AfterViewInit {

  @Input() currentPage!: number;
  public addChildForm: any;
  isSubmitted: boolean = false;
  message: string = '';
  title: string = 'Child enrolled notification'

  constructor(private formbuilder: FormBuilder, public storeService: StoreService, public backendService: BackendService) {
  }

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      console.log(this.currentPage);
      this.backendService.addChildData(this.addChildForm.value, this.currentPage);
      this.message = `${this.addChildForm.value.name} : has been enrolled successfully!`

      this.isSubmitted = true;
      setTimeout(() => {
        this.isSubmitted = false;
      }, 7000)

    }
  }

  ngAfterViewInit(): void {
    this.message
  }
}
