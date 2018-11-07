import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewErrorMessageComponent } from './view-error-message.component';

describe('ViewErrorMessageComponent', () => {
  let component: ViewErrorMessageComponent;
  let fixture: ComponentFixture<ViewErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
