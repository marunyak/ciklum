import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EmployesService } from './services/employes.service';
import { Employee } from './models/employee.interface';

@Component({
  selector: 'employees-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  loading = true;

  constructor(
    private employeesService: EmployesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getEmpolyees();
  }

  getEmpolyees() {
    this.employeesService.getEmployee().subscribe(res => {
      res.sort((a, b) => {
        if (a.name > b.name) { return 1; } else if (a.name < b.name) { return -1; }
        return 0;
      });
      console.log(res)
      this.employees = res;
      this.loading = false;
      this.cdr.detectChanges();
    }, err => console.log(err));
  }


}
