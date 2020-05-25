import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewRef, Output, EventEmitter } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { UpdateEmployee } from 'apps/employees/src/app/store/actions';
import { Observable } from 'rxjs';
import { EmployeeState } from 'apps/employees/src/app/store/state';
import { Employee } from 'libs/ui/src/lib/models/employee.interface';
import { UiService } from 'libs/ui/src/lib/service/ui.service';

@Component({
  selector: 'employees-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  @Select(EmployeeState.isLoadingEmployee) loading$: Observable<any>;
  @Select(EmployeeState.getEmployeeItem) employee$: Observable<Employee>;

  employee: Employee;
  openEditMode = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.employee$.subscribe(res => {
      this.employee = res;
      this.uiService.setLog(res.name);
    });
  }

  editEmployee(editEmployee: Employee){
    this.store.dispatch(new UpdateEmployee(editEmployee));
  }

  openEdit() {
    this.openEditMode = !this.openEditMode;
  }

  private detectChanges() {
    if (!(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }

}
