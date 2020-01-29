import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './AppComponent/home/home.component';
import { DashboardComponent } from './AppComponent/dashboard/dashboard.component';
import { RequestAccessComponent } from './AppComponent/request-access/request-access.component';
import { ProjectManagementComponent } from './AppComponent/project-management/project.managment.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projectmanagement', component: ProjectManagementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requestAccess', component: RequestAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
