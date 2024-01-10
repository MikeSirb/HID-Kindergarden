import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {DataComponent} from './component/dashboard/data/data.component';
import {AddDataComponent} from './component/dashboard/add-data/add-data.component';
import {HeaderComponent} from './component/header/header.component';
import {ButtonComponent} from './component/dashboard/button/button.component';
import {PaginationPipe} from './component/dashboard/data/pagination.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AlertComponent} from "./shared/alert/alert.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FilterBarComponent} from './component/dashboard/filter-bar/filter-bar.component';
import {MatSortModule} from "@angular/material/sort";
import {KindergardensComponent} from './component/kindergardens/kindergardens.component';
import {FooterComponent} from './component/footer/footer.component';
import {KindergardenInfoComponent} from './component/dashboard/kindergarden-info/kindergarden-info.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    DashboardComponent,
    AddDataComponent,
    DataComponent,
    HeaderComponent,
    ButtonComponent,
    AlertComponent,
    PaginationPipe,
    LoadingSpinnerComponent,
    FilterBarComponent,
    KindergardensComponent,
    FooterComponent,
    KindergardenInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB',},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
