import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, ActivatedRoute, Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { FetchEmployee } from '../../../../../apps/employees/src/app/store/actions';
import { EmployeeState } from '../../../../../apps/employees/src/app/store/state';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.interface';
import { UiService } from '../service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate, CanActivateChild {

  @Select(EmployeeState.getEmployeeItem) employee$: Observable<Employee>;

  constructor(private store: Store, private uiService: UiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise((resolve, reject) => {
        const { id } = next.params;
        this.store.dispatch(new FetchEmployee(id)).subscribe(() => resolve(true), err => reject(err));
      });
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(next, state);
  }

}
