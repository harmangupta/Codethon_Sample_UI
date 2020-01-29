import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './AppComponent/home/home.component';
import { DashboardComponent } from './AppComponent/dashboard/dashboard.component';
import { RequestAccessComponent } from './AppComponent/request-access/request-access.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requestAccess', component: RequestAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
