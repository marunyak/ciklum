import { async, TestBed } from '@angular/core/testing';
import { EmployeesModule } from './employees.module';

describe('EmployeesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EmployeesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EmployeesModule).toBeDefined();
  });
});
