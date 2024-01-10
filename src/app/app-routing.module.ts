import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {KindergardensComponent} from "./component/kindergardens/kindergardens.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kindergardens', component: KindergardensComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
