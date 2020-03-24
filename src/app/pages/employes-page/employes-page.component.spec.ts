import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesPageComponent } from './employes-page.component';

describe('EmployesPageComponent', () => {
  let component: EmployesPageComponent;
  let fixture: ComponentFixture<EmployesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});