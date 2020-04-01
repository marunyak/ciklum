import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../services/employes.service';

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
       street: string;
       suite: string;
       city: string;
       zipcode: string;
       geo: {
            lat: number;
            lng: number;
       }
  };
  phone: string;
  website: string;
  company: {
       name: string;
       catchPhrase: string;
       bs: string;
  };
}

@Component({
  selector: 'employees-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

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
