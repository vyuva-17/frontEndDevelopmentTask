import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import {RestService} from './interceptor';
import { HomeComponent } from './home/home.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TaskImplementationComponent } from './task-implementation/task-implementation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayEmployeeChildComponent } from './display-employee-child/display-employee-child.component';

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
    AppMaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RestService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
