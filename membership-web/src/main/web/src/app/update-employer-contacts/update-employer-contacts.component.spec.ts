import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployerContactsComponent } from './update-employer-contacts.component';

describe('UpdateEmployerContactsComponent', () => {
  let component: UpdateEmployerContactsComponent;
  let fixture: ComponentFixture<UpdateEmployerContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployerContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployerContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
