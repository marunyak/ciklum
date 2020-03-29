import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';
import { Employee } from 'src/app/models/employee.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  employee: Employee;
  loading = true;

  constructor(
    private  employeesService: EmployesService,
    private route: ActivatedRoute
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
    });
  }

}
