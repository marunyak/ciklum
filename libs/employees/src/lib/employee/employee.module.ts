import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EmployeeComponent },
    ]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports: []
})
export class EmployeeModule { }
