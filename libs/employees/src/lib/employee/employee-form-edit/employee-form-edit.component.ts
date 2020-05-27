import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Employee } from 'libs/ui/src/lib/models/employee.interface';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
import { form } from 'apps/employees/src/app/store/state';
import { EMPTY } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'employees-employee-form-edit',
  templateUrl: './employee-form-edit.component.html',
  styleUrls: ['./employee-form-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeFormEditComponent implements OnInit {

  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   username: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   email: new FormControl('', [Validators.required])
  // })

  @Output() edit = new EventEmitter();
  @Output() save = new EventEmitter();
  @Input() editEmployee: Employee;

  form;

  constructor() {}

  ngOnInit(): void {
    this.form = form;
    const { name, username, email } = this.editEmployee;
    form.setValue({ name, username, email });
    this.initFormChanges();
  }

  initFormChanges() {
    form.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(data => {
          this.edit.emit(data);
          return EMPTY;
        })
    ).subscribe()
  }

  onSubmit() {
    this.save.emit();
  }
}
