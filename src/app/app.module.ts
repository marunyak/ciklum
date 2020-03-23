import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { EmployesPageComponent } from './pages/employes-page/employes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePageComponent,
    EmployesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
