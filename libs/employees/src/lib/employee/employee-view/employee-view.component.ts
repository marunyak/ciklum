import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'libs/ui/src/lib/models/employee.interface';

@Component({
  selector: 'employees-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  @Input() employee: Employee;
  infoEmployee

  constructor() {
  }

  ngOnInit(): void {

  }

}
