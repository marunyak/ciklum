import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFromAddComponent } from './employee-from-add.component';

describe('EmployeeFromAddComponent', () => {
  let component: EmployeeFromAddComponent;
  let fixture: ComponentFixture<EmployeeFromAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFromAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFromAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
