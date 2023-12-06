import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataComponent} from './dashboard/data/data.component';
import {AddDataComponent} from './dashboard/add-data/add-data.component';
import {HeaderComponent} from './header/header.component';
import {ButtonComponent} from './dashboard/button/button.component';
import {PaginationPipe} from './dashboard/data/pagination.pipe';
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
import {AboutPageComponent} from "./about-page/about-page.component";

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
        AboutPageComponent
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
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB',},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
