import { catchError, map, tap } from 'rxjs/operators';
import { Action, StateContext, State, Selector } from '@ngxs/store';
import { FetchEmployees, AddEmployees } from '../actions/employees.actions';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Employee } from 'libs/ui/src/lib/models/employee.interface';
import { EmployesService } from 'libs/ui/src/lib/service/employes.service';

export class EmployeesStateModel {
    loading: boolean;
    employees: Employee[];
}

@State<EmployeesStateModel>({
    name: 'employees',
    defaults: {
        loading: true,
        employees: []
    }
})
@Injectable()
export class EmployeesState {

    constructor(private employeesService: EmployesService,){}

    @Selector()
    static getEmployeesList(state: EmployeesStateModel) {
        return state.employees
    }

    @Selector()
    static isLoadingEmployees(state: EmployeesStateModel) {
        return state.loading
    }

    @Action(FetchEmployees)
    getEmployees(ctx: StateContext<EmployeesStateModel>) {
        return this.employeesService.getEmployees().pipe(
            tap((result) => {
                const state = ctx.getState();

                result.sort((a, b) => {
                    if (a.name > b.name) { return 1; } else if (a.name < b.name) { return -1; }
                    return 0;
                });

                ctx.setState({
                    ...state,
                    loading: false,
                    employees: result
                })
            }),
            catchError(this.handleError<Employee[]>())
          );
    }

    @Action(AddEmployees)
    addEmployees(ctx: StateContext<EmployeesStateModel>, action: AddEmployees) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            employees: [
                ...state.employees,
                action.employee
            ]
        })
    }

    private handleError<T>(operation = 'operation', result?: T ) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
    }
}
