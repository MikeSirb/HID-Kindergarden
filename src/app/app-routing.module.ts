import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {KindergardensComponent} from "./kindergardens/kindergardens.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kindergardens', component: KindergardensComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'test', component: TestComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
