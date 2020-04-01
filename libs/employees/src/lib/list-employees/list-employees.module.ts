import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './list-employees.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ListEmployeesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListEmployeesComponent },
      {
        path: ':id',
        loadChildren: () => import('./employee/employee.module').then(n => n.EmployeeModule)
      }
    ]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  exports: [RouterModule]
})
export class ListEmployeesModule { }
