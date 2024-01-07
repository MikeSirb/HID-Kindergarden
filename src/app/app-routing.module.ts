import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {KindergardensComponent} from "./kindergardens/kindergardens.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kindergardens', component: KindergardensComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
