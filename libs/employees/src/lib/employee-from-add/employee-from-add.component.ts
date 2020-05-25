import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'employees-employee-from-add',
  templateUrl: './employee-from-add.component.html',
  styleUrls: ['./employee-from-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFromAddComponent implements OnInit {

  form: FormGroup;
  @Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  addEmployee() {
      const formData = {...this.form.value};
      this.onAdd.emit(formData);
      this.form.reset();
  }

}
