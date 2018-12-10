import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMaintenanceComponent } from './client-maintenance.component';

describe('ClientMaintenanceComponent', () => {
  let component: ClientMaintenanceComponent;
  let fixture: ComponentFixture<ClientMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
