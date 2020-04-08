import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';

const route: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./employee/employee.module').then(n => n.EmployeeModule)
  }
];

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route),
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
export class EmployeesModule {}
