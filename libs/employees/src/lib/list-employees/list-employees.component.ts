import { Component, OnInit } from '@angular/core';
import { EmployesService } from './services/employes.service';

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
  selector: 'employees-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

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
