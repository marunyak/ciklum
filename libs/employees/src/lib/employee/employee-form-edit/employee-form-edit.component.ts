import { Component, Output, Input, EventEmitter, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewRef } from '@angular/core';
import { Employee } from 'libs/ui/src/lib/models/employee.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'employees-employee-form-edit',
  templateUrl: './employee-form-edit.component.html',
  styleUrls: ['./employee-form-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeFormEditComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required])
  })

  @Output() edit = new EventEmitter();
  @Input() editEmployee: Employee;

  constructor() {}

  ngOnInit(): void {
    const { name, username, email } = this.editEmployee;
    this.form.setValue({ name, username, email });
    this.initFormChanges();
  }

  initFormChanges() {
    this.form.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(data => {
          this.edit.emit(data);
          return EMPTY;
        })
    ).subscribe()
  }

  onSubmit() {
    if(this.form.valid) {
      console.log('Send on BackEnd')
    } else console.log('Not Valid form')
  }

}
