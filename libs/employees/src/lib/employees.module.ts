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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EmployeesComponent } from './employees.component';
import { EmployeeFromAddComponent } from './employee-from-add/employee-from-add.component';
import { EmployeeGuard } from '../../../ui/src/lib/guards/employee.guard';

const route: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: ':id',
    canActivateChild: [EmployeeGuard],
    loadChildren: () => import('./employee/employee.module').then(n => n.EmployeeModule)
  }
];

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeFromAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: []
})
export class EmployeesModule {}
