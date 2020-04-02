import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../services/employes.service';
import { Employee } from '../models/employee.interface';

@Component({
  selector: 'employees-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  employee: Employee;
  loading = true;

  constructor(
    private  employeesService: EmployesService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe(res => id = res.id);
    this.getEmployeeById(id);
  }

  getEmployeeById(id: number) {
    this.employeesService.getEmployeeById(id).subscribe(res => {
      this.employee = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
