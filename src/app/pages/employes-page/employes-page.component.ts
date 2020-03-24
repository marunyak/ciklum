import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';
import { Employee } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-employes-page',
  templateUrl: './employes-page.component.html',
  styleUrls: ['./employes-page.component.css']
})
export class EmployesPageComponent implements OnInit {

  employees: Employee[];
  loading = true;

  constructor(
    private employeesService: EmployesService
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
      this.employees = res;
      this.loading = false;
    }, err => console.log(err));
  }

}
