import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  private url = 'https://jsonplaceholder.typicode.com';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Accept : 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/users`, this.httpOptions)
                .pipe(
                  catchError(this.handleError<Employee[]>())
                );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/users/${id}`, this.httpOptions )
                .pipe(
                  catchError(this.handleError<Employee>())
                );
  }

  private handleError<T>(operation = 'operation', result?: T ) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
