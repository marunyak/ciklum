import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employees'
  },
  {
    path: 'employees',
    loadChildren: () => import('../../../../libs/employees/src/lib/employees.module').then(n => n.EmployeesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
