import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EetErrorsComponent } from './eet-errors.component';

describe('EetErrorsComponent', () => {
  let component: EetErrorsComponent;
  let fixture: ComponentFixture<EetErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EetErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EetErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
