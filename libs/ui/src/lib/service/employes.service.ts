import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  private url = 'http://localhost:4200/assets/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Accept : 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}.json`, this.httpOptions);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}.json`, this.httpOptions );
  }

}
