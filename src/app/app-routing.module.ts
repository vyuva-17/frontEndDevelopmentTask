/***
 import the Routes API and component's which are belonging to this module.
***/
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TaskImplementationComponent } from './task-implementation/task-implementation.component';
import { AuthGaurdService as AuthGuard } from './auth-gaurd.service';
/***
 Routes API to route the data based on authGaurdServices using canActivate API for task summary and task implementation component
 ***/
const appRoutes: Routes = [
  { path: '', redirectTo: 'app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-task-summary', component: TaskSummaryComponent, canActivate: [AuthGuard] },
  { path: 'app-task-implementation', component: TaskImplementationComponent, canActivate: [AuthGuard] },

];
/***
 ngModule directive to import the routes over the component belongs to the module and exports the imported route module in app module.ts and provides the authguard services over the application during navigation as per Task-1
***/
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ],
})
export class AppRoutingModule { }
