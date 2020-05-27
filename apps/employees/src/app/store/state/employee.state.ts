import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { FetchEmployee, UpdateEmployee, SaveUpdateEmployee } from '../actions/employee.actions';
import { EmployesService } from 'libs/ui/src/lib/service/employes.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

export class EmployeeStateModel {
    loading: Boolean;
    employee
}

export const form = new FormGroup({
    name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ]),
    username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ]),
    email: new FormControl('', [
        Validators.required
    ])
})

@State<EmployeeStateModel>({
    name: 'employee',
    defaults: {
        loading: true,
        employee: form.value
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

        ctx.patchState({
            ...state,
            employee: {
                ...state.employee,
                ...action.employee
            }
        })
    }

    @Action(SaveUpdateEmployee)
    saveUpdateEmployee(ctx: StateContext<EmployeeStateModel>) {
        if (form.valid) {
            console.log("Yeeeah, you can send response on BackEnd")
        } else console.log("Form is not Valid!!!")
    }

}
