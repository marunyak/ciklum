import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@employees/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesState } from './store/state/employees.state';
import { EmployeeState } from './store/state/employee.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from '../../../../libs/ui/src/lib/interceptors/loader.interceptor';
import { environment } from '../environments/environment';
//import { LoaderComponent } from '../../../../libs/ui/src/lib/loader/loader.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      EmployeesState,
      EmployeeState
    ], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
