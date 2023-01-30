import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from '../app/dashboard/dashboard.component'
import { InventoryComponent } from './dashboard/inventory/inventory.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashborad', pathMatch: 'full' },
  { path: 'dashborad', component: DashboardComponent,data: { title: 'Dashborad'},
  children: [
    { path: '', redirectTo: 'inventory',pathMatch: 'full' },
    { path: 'inventory', component: InventoryComponent, data: { title: 'Inventory'}},
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
