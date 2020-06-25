import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeeChildComponent } from './display-employee-child.component';

describe('DisplayEmployeeChildComponent', () => {
  let component: DisplayEmployeeChildComponent;
  let fixture: ComponentFixture<DisplayEmployeeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEmployeeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmployeeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
