import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobScheduleOptionComponent } from './job-schedule-option.component';

describe('JobScheduleOptionComponent', () => {
  let component: JobScheduleOptionComponent;
  let fixture: ComponentFixture<JobScheduleOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobScheduleOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobScheduleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
