import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EetMemberManuComponent } from './eet-member-manu.component';

describe('EetMemberManuComponent', () => {
  let component: EetMemberManuComponent;
  let fixture: ComponentFixture<EetMemberManuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EetMemberManuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EetMemberManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
