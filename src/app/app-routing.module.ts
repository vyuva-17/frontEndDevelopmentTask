import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TaskImplementationComponent } from './task-implementation/task-implementation.component';
import {
  AuthGaurdService as AuthGuard
} from './auth-gaurd.service';


const appRoutes: Routes = [
  { path: '',   redirectTo: 'app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-task-summary', component: TaskSummaryComponent, canActivate: [AuthGuard] },
  { path: 'app-task-implementation', component: TaskImplementationComponent, canActivate:[AuthGuard] },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ],
})
export class AppRoutingModule { }
