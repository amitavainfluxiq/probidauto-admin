import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';


import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
    {path:'', component: DashboardComponent},
  /*  {path:'dashboard', component:DashboardComponent},*/

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
