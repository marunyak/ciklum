import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FetchEmployees, AddEmployees } from '../../../../apps/employees/src/app/store/actions';
import { EmployeesState } from '../../../../apps/employees/src/app/store/state';
import { Observable } from 'rxjs';
import { UiService } from 'libs/ui/src/lib/service/ui.service';
import { Employee } from 'libs/ui/src/lib/models/employee.interface';

@Component({
  selector: 'employees-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  @Select(EmployeesState.getEmployeesList) employees$: Observable<Employee[]>
  @Select(EmployeesState.isLoadingEmployees) loading$: Observable<any>

  constructor(
    private uiService: UiService,
    private cdr: ChangeDetectorRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchEmployees()).subscribe(() => {
      this.uiService.setLog('List Employees');
    }, err => console.log(err));
  }

  addNewEmployee(employee: Employee) {
    this.store.dispatch(new AddEmployees(employee));
  }

}
