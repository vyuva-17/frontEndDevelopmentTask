/***
 Modules and components which are belonged to this application with dependencies header
 ***/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { Interceptor } from './interceptor';
import { HomeComponent } from './home/home.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TaskImplementationComponent } from './task-implementation/task-implementation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayEmployeeChildComponent } from './display-employee-child/display-employee-child.component';



/***
  Declaration of the component which is belonged to this module,
 Import the API server over the component which is belonged to this module,
 Provider will provide the Data over the all components which are belonged to this module and Bootstrap the over all application for responsiveness over the application
 ***/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskSummaryComponent,
    TaskImplementationComponent,
    DisplayEmployeeChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AppMaterialModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
