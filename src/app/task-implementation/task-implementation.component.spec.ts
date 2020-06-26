import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from '../rest.service';

import { TaskImplementationComponent } from './task-implementation.component';

describe('TaskImplementationComponent', () => {
  let component: TaskImplementationComponent;
  let fixture: ComponentFixture<TaskImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskImplementationComponent ],
      imports: [HttpClientTestingModule],
      providers: [RestService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
