import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployesPageComponent } from './pages/employes-page/employes-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employes' },
  { path: 'employes', component: EmployesPageComponent },
  { path: 'employee/:id', component: EmployeePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
