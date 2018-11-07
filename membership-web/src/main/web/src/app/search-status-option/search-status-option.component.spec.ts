import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStatusOptionComponent } from './search-status-option.component';

describe('SearchStatusOptionComponent', () => {
  let component: SearchStatusOptionComponent;
  let fixture: ComponentFixture<SearchStatusOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStatusOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStatusOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
