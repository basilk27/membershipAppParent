import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EetMainComponent } from './eet-main.component';

describe('EetMainComponent', () => {
  let component: EetMainComponent;
  let fixture: ComponentFixture<EetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
