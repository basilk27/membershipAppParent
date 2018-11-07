import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaDocReportsComponent } from './ca-doc-reports.component';

describe('CaDocReportsComponent', () => {
  let component: CaDocReportsComponent;
  let fixture: ComponentFixture<CaDocReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaDocReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaDocReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
