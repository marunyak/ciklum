import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { FetchEmployee, UpdateEmployee } from '../actions/employee.actions';
import { EmployesService } from 'libs/ui/src/lib/service/employes.service';


export class EmployeeStateModel {
    loading: Boolean;
    employee
}

@State<EmployeeStateModel>({
    name: 'employee',
    defaults: {
        loading: true,
        employee: null
    }
})

@Injectable()

export class EmployeeState {

    constructor(private employeeService: EmployesService) {}

    @Selector()
    static isLoadingEmployee(state: EmployeeStateModel) {
        return state.loading;
    }

    @Selector()
    static getEmployeeItem(state: EmployeeStateModel) {
        return state.employee;
    }

    @Action(FetchEmployee)
    getEmployee(ctx: StateContext<EmployeeStateModel>, action: FetchEmployee) {
        return new Promise((resolve,reject) => {
            this.employeeService.getEmployeeById(action.id).subscribe((res) => {
                const state = ctx.getState();

                ctx.setState({
                    ...state,
                    loading: false,
                    employee: res
                })

                resolve(true)
            }, err => reject(err))
        })
    }

    @Action(UpdateEmployee)
    updateEmployee(ctx: StateContext<EmployeeStateModel>, action: UpdateEmployee) {
        const state = ctx.getState();
        console.log(action)
        ctx.patchState({
            ...state,
            employee: {
                ...state.employee,
                ...action.employee
            }
        })
    }

}
